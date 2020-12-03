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
faChartArea,faChartPie,faChartLine,faChartBar,faSignOutAlt,faEnvelope,faWindowClose,faComments,faQuestion,faEdit,faBell,faGripLines} 
from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser,faInfoCircle,faBars,faAddressCard,faInfo,faAngleRight,faAngleDown,faClipboardList,faRing,faClone,faColumns,
faChartArea,faChartPie,faChartLine,faChartBar,faSignOutAlt,faEnvelope,faWindowClose,faComments,faQuestion,faEdit,faBell,faGripLines)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

/*VESSEL COMPONENT*/
import Vessel from './template/components/Vessel/Vessel.vue'
import VesselBody from './template/components/Vessel/VesselBody.vue'
import VesselHeader from './template/components/Vessel/VesselHeader.vue'
Vue.component('vessel', Vessel)
Vue.component('vessel-body', VesselBody)
Vue.component('vessel-header', VesselHeader)

/*TEMPLATE CSS*/
import "./template/assets/sass/alpha/alpha.scss";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
