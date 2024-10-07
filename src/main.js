import { createApp } from 'vue'
import App from './App.vue'
import HDE from './plugin/index.js'
import './assets/style.css'

HDE.on('ready', function () {
  const app = createApp(App)

  app.mount('#app')
})
