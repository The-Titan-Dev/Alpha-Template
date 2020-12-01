import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faInfoCircle,faBars,faAddressCard ,faInfo,faAngleRight,faAngleDown,faClipboardList,faRing,faClone,faColumns,
faChartArea,faChartPie,faChartLine,faChartBar,faSignOutAlt,faEnvelope,faWindowClose,faComments,faQuestion,faEdit,faBell} 
from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser,faInfoCircle,faBars,faAddressCard,faInfo,faAngleRight,faAngleDown,faClipboardList,faRing,faClone,faColumns,
faChartArea,faChartPie,faChartLine,faChartBar,faSignOutAlt,faEnvelope,faWindowClose,faComments,faQuestion,faEdit,faBell)
 
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
// require('vue2-animate/dist/vue2-animate.min.css')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
