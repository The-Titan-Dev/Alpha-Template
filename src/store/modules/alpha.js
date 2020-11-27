export default {
	state: {
		showProfile: false,
		showDDMenu: false,
        showSidebar:false,
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
	},
	getters: {
		getShowProfileStatus: (state) => state.showProfile,
		getShowDDMenuStatus: (state) => state.showDDMenu,
		getShowSidebarStatus: (state) => state.showSidebar,
	},
};
