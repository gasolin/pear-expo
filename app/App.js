import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from'react';

import useWorklet from './src/hook/useWorklet';

const BARE_BUNDLE = `
  const rpc = new BareKit.RPC((req) => {
    if (req.command === 'ping') {
      console.log(req.data.toString())

      req.reply('Hello from Bare!')
    }
  })
`

export default function App() {
  const [worklet, rpc] = useWorklet()
  const [response, setReponse] = useState(null)

  useEffect(() => {
    if (!worklet || !rpc) return
    worklet.start('/bareend.js', BARE_BUNDLE)

    const req = rpc.request('ping')

    req.send('Hello from React Native!')
    req.reply('utf8').then((res) => setReponse(res))
  }, [worklet, rpc])

  return (
    <View style={styles.container}>
      <Text>Open up app/App.js to start working on your app!</Text>
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
