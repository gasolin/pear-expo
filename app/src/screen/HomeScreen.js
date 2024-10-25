import { useState, useCallback } from'react'
import { StatusBar } from 'expo-status-bar'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { useBackend } from '../component/BareProvider'

export const HomeScreen = () => {
  const [response, setReponse] = useState(null)
  const backend = useBackend()

  const handleAction = useCallback(() => {
    backend.ping(setReponse)
  }, [backend])

  return (
    <View style={styles.container}>
      <Text>Open up app/App.js to start working on your app!</Text>
      <Text>Open worklet/app.cjs to start working on bare code.</Text>
      <Pressable style={styles.button} onPress={handleAction}>
        <Text style={styles.text}>Hello</Text>
      </Pressable>
      <Text>{response}</Text>
      <StatusBar style="auto" />
    </View>
  )
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
})

export default HomeScreen
