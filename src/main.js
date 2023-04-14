import { createApp } from 'vue'

// 引用pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// icon、element-plus全局引用
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// pinia 调用
const pinia=createPinia()
app.use(createPinia())
pinia.use(piniaPluginPersistedstate)

app.use(router)

// icon、element-plus调用
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.use(ElementPlus)
app.mount('#app')
