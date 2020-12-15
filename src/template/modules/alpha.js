export default {
  state: {
    showProfile: false,
    showDDMenu: false,
    showSidebar: false,
    showSidebarSubMenu: false
  },
  mutations: {
    setProfileVisibility(state) {
      state.showProfile = !state.showProfile;
    },
    setDDMenuVisibility(state) {
      state.showDDMenu = !state.showDDMenu;
    },
    setSidebarVisibility(state) {
      state.showSidebar = !state.showSidebar;
    },
    setSidebarSubMenuVisibility(state) {
      state.showSidebarSubMenu = !state.showSidebarSubMenu;
    }
  },
  actions: {
    async setProfileVisibility(state) {
      state.commit("setProfileVisibility");
    },
    async setDDMenuVisibility(state) {
      state.commit("setDDMenuVisibility");
    },
    async setSidebarVisibility(state) {
      state.commit("setSidebarVisibility");
    },
    async setSidebarSubMenuVisibility(state) {
      state.commit("setSidebarSubMenuVisibility");
    }
  },
  getters: {
    getShowProfileStatus: state => state.showProfile,
    getShowDDMenuStatus: state => state.showDDMenu,
    getShowSidebarStatus: state => state.showSidebar,
    getShowSidebarSubMenuStatus: state => state.showSidebarSubMenu
  }
};
