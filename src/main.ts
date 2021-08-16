import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

import { registerApp } from './global'

const app = createApp(App)
app.use(router)
app.use(store)
registerApp(app)
app.mount('#app')
//css
import 'normalize.css'
import '@/assets/css/index.less'
