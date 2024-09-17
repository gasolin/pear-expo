import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useCallback, useEffect, useState } from'react';

import useWorklet from './src/hook/useWorklet';
import { API_PING, API_REVERSE } from './worklet/api';
import BARE_BUNDLE from './worklet';

export default function App() {
  const [worklet, rpc] = useWorklet()
  const [response, setReponse] = useState(null)

  const handleAction = useCallback(() => {
    if (!rpc) return
    const req = rpc.request(API_PING)
    // const req = rpc.request(API_REVERSE)
    req.send('Hello from RN UI!')
    req.reply('utf8').then((res) => setReponse(res))
  }, [rpc])

  useEffect(() => {
    if (!worklet) return
    worklet.start('/bareend.mjs', BARE_BUNDLE)
  }, [worklet])

  return (
    <View style={styles.container}>
      <Text>Open up app/App.js to start working on your app!</Text>
      <Text>Open worklet/app.js to start working on bare code.</Text>
      <Pressable style={styles.button} onPress={handleAction}>
        <Text style={styles.text}>Hello</Text>
      </Pressable>
      <Text>{response}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0aa',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
