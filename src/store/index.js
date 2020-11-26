import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import alpha from './modules/alpha'

export default new Vuex.Store({
  state: {

  },
  mutations: {},
  actions: {},
  modules: {
    alpha,
  }
});
