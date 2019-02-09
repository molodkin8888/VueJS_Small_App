import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElTable from 'element-table'
import 'element-theme-chalk';
import Element from 'element-ui'
 

Vue.use(BootstrapVue)
library.add(faCoffee)
Vue.use(VueAxios, axios)
Vue.use(ElTable)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


