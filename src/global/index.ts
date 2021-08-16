import { App } from '@vue/runtime-core'

import registerElement from './register-element'

export function registerApp(app: App): void {
  registerElement(app)
}
