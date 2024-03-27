import { createStore } from 'vuex'

export default createStore({
  state: {
    invites: []
  },
  getters: {},
  mutations: {
    resetInvites(state, invites) {
      state.invites = invites
    },
    addInvite(state, invite) {
      state.invites.unshift(invite)
    },
    updateInvite(state, updatedInvite) {
      for (let i = 0; i < state.invites.length; i++) {
        if (state.invites[i].id == updatedInvite.id) {
          state.invites[i] = updatedInvite
          break
        }
      }
    }
  },
  actions: {
    ToggleInvites({ commit }, invites) {
      commit('addInvite', invites)
    },
    ToggleInvite({ commit }, invite) {
      commit('updateInvite', invite)
    },
    ResetInvites({ commit }, invites) {
      commit('resetInvites', invites)
    }
  },
  modules: {}
})
