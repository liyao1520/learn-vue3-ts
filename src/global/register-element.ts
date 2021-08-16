import 'element-plus/lib/theme-chalk/base.css'
import {
  ElAside,
  ElButton,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubmenu
} from 'element-plus'
import { App } from '@vue/runtime-dom'
const components = [
  ElButton,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElInput,
  ElForm,
  ElFormItem
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
