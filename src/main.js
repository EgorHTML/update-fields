import { createApp } from 'vue'
import App from './App.vue'
import HDE from './plugin/index.js'

HDE.on('ready', function () {
  const app = createApp(App)
  // window.parent.document.head.querySelectorAll('style').forEach((style) => {
  //   document.head.appendChild(style.cloneNode(true))
  // })

  app.mount('#app')
})
