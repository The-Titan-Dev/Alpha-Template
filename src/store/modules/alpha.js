export default {
    state: {
        showProfile: false,
    },
    mutations: {
        setProfileVisibility(state) {
            state.showProfile = !state.showProfile
        },
    },
    actions: {
        async setProfileVisibility(state) {
            state.commit('setProfileVisibility')
        },
    },
    getters: {
        getShowProfileStatus: state => state.showProfile,
    }
}