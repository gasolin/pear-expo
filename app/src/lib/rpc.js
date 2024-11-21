// import b4a from 'b4a'                 // Module for buffer-to-string and vice-versa conversions

import {
  API_PING,
  API_REVERSE,
  API_BARE_PING,
} from '../../worklet/api'

// RPCs receiver from worklet to UI
export const rpcHandler = async (req) => {
  console.log('command from worklet', req.command)
  // const text = b4a.toString(req.data, 'utf8')
  // console.log(JSON.stringify(req))
  switch(req.command) {
    case API_BARE_PING:
      console.log(API_BARE_PING)
      break
    default:
      break
  }
}

// RPCs call from UI to worklet
export const getBackend = (rpc) => ({
  ping: (callback) => {
    if (!rpc || !callback) return
    const req = rpc.request(API_PING)
    req.send('Hello from RN UI!')
    req.reply('utf8').then((res) => callback(res))
  },
  reverse: (callback) => {
    if (!rpc || !callback) return
    const req = rpc.request(API_REVERSE)
    req.send('Reverse RN UI!')
    req.reply('utf8').then((res) => callback(res))
  }
})
