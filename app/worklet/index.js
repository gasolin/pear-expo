import { API_PING, API_REVERSE } from './api'

const BARE_BUNDLE = `
  const getTranslation = (text) => text.split('').reverse().join('')
  const rpc = new BareKit.RPC((req) => {
    const text = req.data.toString()
    switch(req.command) {
      case '${API_PING}':
        console.log(text)
        req.reply('Hello from Bare!')
        break
      case '${API_REVERSE}':
        const result = getTranslation(text)
        req.reply(result)
        break
    }
  })
`

export default BARE_BUNDLE
export { API_PING, API_REVERSE }
