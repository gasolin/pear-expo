
import { createContext, useContext, useState, useEffect } from'react'

import { getBackend } from '../lib/rpc'
import useWorklet from '../hook/useWorklet'

const BareApiContext = createContext(null)
const noop = () => {}

export const BareProvider = ({ children, rpcHandler = noop }) => {
  const [backend, setBackend] = useState(null)
  const [worklet, rpc] = useWorklet(rpcHandler)

  useEffect(() => {
    if (!worklet) return
    worklet.start('/app.bundle', require('../../worklet/app.bundle'))
  }, [worklet])

  useEffect(() => {
    if (!rpc || !worklet) return
    const bareBackend = getBackend(rpc, worklet)
    setBackend(bareBackend)
  }, [rpc, worklet])

  return (
    <BareApiContext.Provider value={backend}>
      {children}
    </BareApiContext.Provider>
  )
}

export const useBackend = () => {
  const context = useContext(BareApiContext)
  // if (context === null) {
  //   throw new Error('useBackend must be used within an KeetProvider');
  // }
  return context
}

export default BareProvider
