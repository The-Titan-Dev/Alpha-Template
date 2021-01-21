export default {
    state: {
        confirmations: []
    },
    mutations: {
        PUSH_NOTIFICATION(state, notification){
            state.confirmations.push({
                ...notification,
                id: (Math.random().toString(36)+Date.now().toString(36)).substr(2)
            })
        },
        REMOVE_NOTIFICATION(state){
            state.confirmations = [];
        }
    },
    actions: {
     addConfirmation({commit}, notification) {
         
        commit('PUSH_NOTIFICATION', notification)
     },
     removeConfirmation({commit}) {
        commit('REMOVE_NOTIFICATION')
     },
     test() {
        console.log('test123');
     },
    },
    getters: {
        getConfirmation: state => state.confirmations,
    }
  };
  