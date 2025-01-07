/* global Bare, BareKit */
import RPC from 'bare-rpc'
import { API_PING, API_REVERSE, API_BARE_PING } from './api'
// import BareAddon from 'bare-addon'

Bare
  .on('suspend', () => console.log('suspended'))
  .on('resume', () => console.log('resumed'))
  .on('exit', () => console.log('exited'))

const getTranslation = (text) => text?.split('').reverse().join('')

const rpc = new RPC(BareKit.IPC, (req) => {
  const text = req.data.toString()
  switch(req.command) {
    case API_REVERSE:
      const result = getTranslation(text)
      req.reply(result)
      break
    case API_PING:
    default:
      console.log('Hello Bare')
      req.reply('Pong from Bare')
      // console.log(BareAddon.hello())
      // req.reply(BareAddon.hello())
  }
})

// API test call from bare to UI
let cnt = 0
setInterval(() => {
  const req = rpc.request(API_BARE_PING)
  cnt++
  req.send(`Bare call ${cnt}`)
}, 15000)
