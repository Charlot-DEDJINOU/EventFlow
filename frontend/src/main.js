import './assets/main.css'
// eslint-disable-next-line no-unused-vars
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App).use(store)

app.use(router)

app.mount('#app')
