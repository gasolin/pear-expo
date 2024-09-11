import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from'react';

import useWorklet from './src/hook/useWorklet';
import BARE_BUNDLE, { API_PING, API_REVERSE } from './worklet';

export default function App() {
  const [worklet, rpc] = useWorklet()
  const [response, setReponse] = useState(null)

  useEffect(() => {
    if (!worklet || !rpc) return
    worklet.start('/bareend.js', BARE_BUNDLE)

    const req = rpc.request(API_PING)
    // const req = rpc.request(API_REVERSE)

    req.send('Hello from RN UI!')
    req.reply('utf8').then((res) => setReponse(res))
  }, [worklet, rpc])

  return (
    <View style={styles.container}>
      <Text>Open up app/App.js to start working on your app!</Text>
      <Text>Open worklet/app.js to start working on bare code.</Text>
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
});
