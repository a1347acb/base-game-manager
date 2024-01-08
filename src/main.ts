import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import Store from '@/store/index.ts'
import Router from '@/router'
import microApp from '@micro-zoe/micro-app'
import 'ant-design-vue/dist/reset.css'

microApp.start()
createApp(App)
  .use(Store)
  .use(Router)
  .mount('#app')
