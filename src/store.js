import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

const _sandbox = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/contineur',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    bugDetails: [],
    comments: []
  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    setComments(state, data) {
      state.comments = data
    },
    setActiveBug(state, bug) {
      state.activeBug = bug
    }
  },
  actions: {
    //GET
    getAllBugs({ commit, dispatch }) {
      _sandbox.get('bugs')
        .then(res => {
          commit('setBugs', res.data.results)
        })
    },
    getAllComments({ commit, dispatch }) {
      _sandbox.get(`bugs/${this.state.activeBug._id}/notes`)
        .then(res => {
          commit('setComments', res.data.results)
        })
    },
    //POST
    addBug({ commit, dispatch }, payload) {
      _sandbox.post('bugs', payload)
        .then(res => {
          dispatch('getAllBugs')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addComment({ commit, dispatch }, payload) {
      _sandbox.post(`bugs/${this.state.activeBug._id}/notes`, payload)
        .then(res => {
          dispatch('getAllComments')
        })
        .catch(err => {
          console.log(err)
        })
    },
    //DELETE
    deleteComment({ commit, dispatch }, commentID) {
      _sandbox.delete(`bugs/${this.state.activeBug._id}/notes/${commentID}`)
      console.log('attempted delete')
      // dispatch('getAllComments')
      //   .catch(err => {
      //     console.log(err)
      //   })
    },
    //SET ACTIVE
    setActiveBug({ commit, dispatch }, bug) {
      commit('setActiveBug', bug)
    }

  }
})
