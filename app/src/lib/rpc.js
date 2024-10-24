import { API_PING, API_REVERSE } from '../../worklet/api'

export const getBackend = (rpc) => ({
  ping: (callback) => {
    if (!rpc) return
    const req = rpc.request(API_PING)
    req.send('Hello from RN UI!')
    req.reply('utf8').then((res) => callback(res))
  },
  reverse: (callback) => {
    if (!rpc) return
    const req = rpc.request(API_REVERSE)
    req.send('Reverse RN UI!')
    req.reply('utf8').then((res) => callback(res))
  }
})
