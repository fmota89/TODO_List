import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const pinia = createPinia();

pinia.use(piniaPluginPersistedState)

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .mount('#app')