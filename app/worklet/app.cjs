/* global Bare, BareKit */
const { API_PING, API_REVERSE } = require('./api2')

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
      console.log(text)
      req.reply('Pong from Bare')
  }
})
