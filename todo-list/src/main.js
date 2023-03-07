import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
