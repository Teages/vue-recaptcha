import { createPlugin } from './plugin'
import { createUnheadRecaptcha } from './script-manager/unhead'

export * from './api'

// plugin
const plugin = createPlugin(createUnheadRecaptcha)
export { plugin as default, plugin as VueRecaptchaPlugin }
