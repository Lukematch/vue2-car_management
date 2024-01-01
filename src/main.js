import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './element-variables.scss'
import 'normalize.css/normalize.css'
import './plugins/element'
import './element-variables.scss'


Vue.config.productionTip = false

// Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
