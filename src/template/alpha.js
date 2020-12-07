import Vue from "vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faInfoCircle,faBars,faAddressCard ,faInfo,faAngleRight,faAngleDown,faClipboardList,faRing,faClone,faColumns,
faChartArea,faChartPie,faChartLine,faChartBar,faSignOutAlt,faEnvelope,faWindowClose,faComments,faQuestion,faEdit,faBell,faGripLines} 
from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser,faInfoCircle,faBars,faAddressCard,faInfo,faAngleRight,faAngleDown,faClipboardList,faRing,faClone,faColumns,
faChartArea,faChartPie,faChartLine,faChartBar,faSignOutAlt,faEnvelope,faWindowClose,faComments,faQuestion,faEdit,faBell,faGripLines)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

/*VESSEL COMPONENT*/
// import Vessel from './template/components/Vessel/Vessel.vue'
// import VesselBody from './template/components/Vessel/VesselBody.vue'
// import VesselHeader from './template/components/Vessel/VesselHeader.vue'
// Vue.component('vessel', Vessel)
// Vue.component('vessel-body', VesselBody)
// Vue.component('vessel-header', VesselHeader)

/*TEMPLATE CSS*/
import "./assets/sass/alpha/alpha.scss";

// AUTOMATIC GLOBAL REGISTRATION OF COMPONENTS
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /\.vue$/
  
)
// console.log(requireComponent.keys());
requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  // Register component globally
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

// AUTOMATIC GLOBAL REGISTRATION OF COMPONENTS -- END