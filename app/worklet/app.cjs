/* global Bare, BareKit */
const { API_PING, API_REVERSE, API_BARE_PING } = require('./api2')
// const BareAddon = require('bare-addon')

Bare
  .on('suspend', () => console.log('suspended'))
  .on('resume', () => console.log('resumed'))
  .on('exit', () => console.log('exited'))

const getTranslation = (text) => text?.split('').reverse().join('')

const rpc = new BareKit.RPC((req) => {
  const text = req.data.toString()
  switch(req.command) {
    case API_REVERSE:
      const result = getTranslation(text)
      req.reply(result)
      break
    case API_PING:
    default:
      // console.log(BareAddon.hello())
      console.log('Hello Bare')
      req.reply('Pong from Bare')
  }
})

// API test call from bare to UI
let cnt = 0
setInterval(() => {
  const req = rpc.request(API_BARE_PING)
  cnt++
  req.send(`Bare call ${cnt}`)
}, 15000)
