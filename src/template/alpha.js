import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faInfoCircle,
  faBars,
  faAddressCard,
  faInfo,
  faAngleRight,
  faAngleDown,
  faClipboardList,
  faRing,
  faClone,
  faColumns,
  faChartArea,
  faChartPie,
  faChartLine,
  faChartBar,
  faSignOutAlt,
  faEnvelope,
  faWindowClose,
  faComments,
  faQuestion,
  faEdit,
  faBell,
  faGripLines
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUser,
  faInfoCircle,
  faBars,
  faAddressCard,
  faInfo,
  faAngleRight,
  faAngleDown,
  faClipboardList,
  faRing,
  faClone,
  faColumns,
  faChartArea,
  faChartPie,
  faChartLine,
  faChartBar,
  faSignOutAlt,
  faEnvelope,
  faWindowClose,
  faComments,
  faQuestion,
  faEdit,
  faBell,
  faGripLines
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import Toast, { POSITION, TYPE } from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./assets/sass/alpha/toaster.scss";

const options = {
  position: POSITION.BOTTOM_RIGHT,
  toastDefaults: {
    [TYPE.ERROR]: {
        timeout: 2000,
        closeButton: false,
        toastClassName : 'toast-error'
    },
    [TYPE.SUCCESS]: {
        timeout: 2000,
        toastClassName : 'toast-success',
        
    },
    [TYPE.WARNING]: {
        timeout: 2000,
        toastClassName : 'toast-warning'
    },
    [TYPE.INFO]: {
        timeout: 2000,
        toastClassName : 'toast-info'
    },
    [TYPE.DEFAULT]: {
      timeout: 2000,
      toastClassName : 'toast-default'
    }
}

};
Vue.use(Toast, options);




/*TEMPLATE CSS*/
import "./assets/sass/alpha/alpha.scss";

// AUTOMATIC GLOBAL REGISTRATION OF COMPONENTS
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
const requireComponent = require.context(
  // The relative path of the components folder
  "./components",
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /\.vue$/
);
// console.log(requireComponent.keys());
requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  // Register component globally
  Vue.component(componentName, componentConfig.default || componentConfig);
});

// AUTOMATIC GLOBAL REGISTRATION OF COMPONENTS -- END
