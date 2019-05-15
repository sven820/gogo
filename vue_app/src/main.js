import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/constantSet'

//jquery
import jquery from 'jquery'
window.$ = window.jquery = jquery
//bootstrap
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
