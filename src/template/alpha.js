import Vue from "vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faInfoCircle,faBars,faAddressCard ,faInfo,faAngleRight,faAngleDown,faClipboardList,faRing,faClone,faColumns,
faChartArea,faChartPie,faChartLine,faChartBar,faSignOutAlt,faEnvelope,faWindowClose,faComments,faQuestion,faEdit,faBell,faGripLines} 
from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser,faInfoCircle,faBars,faAddressCard,faInfo,faAngleRight,faAngleDown,faClipboardList,faRing,faClone,faColumns,
faChartArea,faChartPie,faChartLine,faChartBar,faSignOutAlt,faEnvelope,faWindowClose,faComments,faQuestion,faEdit,faBell,faGripLines)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

import Toast, { POSITION, TYPE } from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  // You can set your default options here
  position: POSITION.TOP_RIGHT,
  toastClassName: "my-custom-toast-class",
  toastDefaults: {
    // ToastOptions object for each type of toast
    [TYPE.ERROR]: {
        timeout: 10000,
        closeButton: false,
    },
    [TYPE.SUCCESS]: {
        timeout: 3000,
        showCloseButtonOnHover: true
    }    
}

};
Vue.use(Toast, options);




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
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
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