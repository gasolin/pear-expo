import { useCallback, useState, useEffect } from 'react'
import { Worklet } from 'react-native-bare-kit'
import RPC from 'bare-rpc'

const DEFAULT_CALLBACK = () => { /* No reply */ }

/**
 * Custom hook to manage Worklet and RPC instances
 * @param {Object} options - Configuration options
 * @param {Function} [options.handler=DEFAULT_CALLBACK] - handler function for RPC communications
 * @param {string} [options.bundle_name='/app.bundle'] - Name of the worklet bundle
 * @returns {[Worklet | null, RPC | null]} Tuple containing worklet and RPC instances
 * @throws {Error} When worklet initialization fails
 * @example
 * const [worklet, rpc] = useWorklet({
 *   handler: (message) => console.log(message),
 * })
 */
const useWorklet = ({
  rpcHandler = DEFAULT_CALLBACK,
  bundle_name = '/app.bundle',
}) => {
  const [worklet, setWorklet] = useState(null)
  const [rpc, setRPC] = useState(null)

  const initWorklet = useCallback(() => {
    if (worklet) {
      return worklet
    }

    try {
      async function init() {
        const newWorklet = new Worklet()
        await newWorklet.start(bundle_name, require('../../worklet/app.bundle'))
        setWorklet(newWorklet)
        return newWorklet
      }
      init()
    } catch (error) {
      console.error('Error initializing Worklet:', error)
      return null
    }
  }, [worklet])

  const initRPC = useCallback((currentWorklet) => {
    if (!currentWorklet) return null
    try {
      if (!rpc) {
        const newRPC = new RPC(currentWorklet.IPC, rpcHandler)
        setRPC(newRPC)
        return newRPC
      }
      return rpc
    } catch (error) {
      console.error('Error initializing RPC:', error)
      return null
    }
  }, [rpc, rpcHandler])

  useEffect(() => {
    const currentWorklet = initWorklet()
    initRPC(currentWorklet)

    return () => {
      if (rpc) {
        // Clean up the RPC instance if necessary
      }
    };
  }, [initWorklet, initRPC, rpc])

  return [worklet, rpc]
};

export default useWorklet
