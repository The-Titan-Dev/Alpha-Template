import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import alpha from "../template/modules/alpha";
import notif from "../template/modules/notification";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    alpha,
    notif
  }
});
