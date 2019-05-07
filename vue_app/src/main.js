import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//jquery
import jquery from 'jquery'
window.$ = window.jquery = jquery
//bootstrap

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
