import { useState, useEffect } from 'react';
import { Worklet } from 'react-native-bare-kit';

const noReply = () => { /* No reply */ }

const useWorklet = (callback = noReply) => {
  const [worklet, setWorklet] = useState(null);
  const [rpc, setRPC] = useState(null);

  useEffect(() => {
    try {
      if (!worklet) {
        const newWorklet = new Worklet()
        setWorklet(newWorklet);
      }
    } catch (error) {
      console.error('Error initializing Worklet:', error);
    }

    try {
      if (worklet && !rpc) {
        const newRPC = new worklet.RPC(callback);
        setRPC(newRPC);
      }
    } catch (error) {
      console.error('Error initializing RPC:', error);
    }

    return () => {
      if (rpc) {
        // Clean up the RPC instance if necessary
        // This depends on the Worklet.RPC API, which isn't fully clear from the provided code
        // You might need to add a cleanup method if required
      }
    };
  }, [worklet, rpc]);

  return [worklet, rpc];
};

export default useWorklet;
