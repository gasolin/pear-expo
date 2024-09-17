import { useCallback, useState, useEffect } from 'react'
import { Worklet } from 'react-native-bare-kit'

const noReply = () => { /* No reply */ }

const useWorklet = (callback = noReply) => {
  const [worklet, setWorklet] = useState(null)
  const [rpc, setRPC] = useState(null);

  const initWorklet = useCallback(() => {
    try {
      if (!worklet) {
        const newWorklet = new Worklet()
        setWorklet(newWorklet)
        return newWorklet
      }
      return worklet
    } catch (error) {
      console.error('Error initializing Worklet:', error)
      return null;
    }
  }, [worklet])

  const initRPC = useCallback((currentWorklet) => {
    if (!currentWorklet) return null
    try {
      if (!rpc) {
        const newRPC = new currentWorklet.RPC(callback)
        setRPC(newRPC)
        return newRPC
      }
      return rpc
    } catch (error) {
      console.error('Error initializing RPC:', error)
      return null
    }
  }, [callback, rpc])

  useEffect(() => {
    const currentWorklet = initWorklet()
    initRPC(currentWorklet)

    return () => {
      if (rpc) {
        // Clean up the RPC instance if necessary
      }
    };
  }, [initWorklet, initRPC, rpc]);

  return [worklet, rpc];
};

export default useWorklet;
