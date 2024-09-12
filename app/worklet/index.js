import { API_PING, API_REVERSE } from './api'

const BARE_BUNDLE = `
  const getTranslation = (text) => text.split('').reverse().join('')
  const rpc = new BareKit.RPC((req) => {
    const text = req.data.toString()
    switch(req.command) {
      case '${API_REVERSE}':
        const result = getTranslation(text)
        req.reply(result)
        break
      case '${API_PING}':
      default:
        req.reply('Hello from Bare!')
    }
  })
`

export default BARE_BUNDLE
export { API_PING, API_REVERSE }
