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
    getAllComments({ commit, dispatch }, payload) {
      if (!payload) return commit('setComments', [])
      _sandbox.get(payload.endpoint)
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
      _sandbox.post(payload.endpoint, payload.data)
        .then(res => {
          dispatch('getAllComments', payload)
        })
        .catch(err => {
          console.log(err)
        })
    },
    //PUT
    changeFlag({ commit, dispatch }, payload) {
      _sandbox.put(payload.endpoint + payload.data.commentID, { "flagged": payload.data.str })
        .then(res => {
          dispatch('getAllComments', payload)
        })
        .catch(err => {
          console.log(err)
        })
    },
    //DELETE
    deleteComment({ commit, dispatch }, payload) {
      _sandbox.delete(payload.endpoint + payload.data)
        .then(res => {
          dispatch('getAllComments', payload)
        })
        .catch(err => {
          console.log(err)
        })
    },
    bugStatus({ commit, dispatch }, id) {
      _sandbox.delete(`bugs/${id}`)
        .then(res => {
          dispatch('setActiveBugParam', id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    //SET ACTIVE
    setActiveBugParam({ commit, dispatch }, id) {
      _sandbox.get('bugs/' + id)
        .then(res => {
          commit('setActiveBug', res.data.results)
        })
    },
    setActiveBug({ commit, dispatch }, bug) {
      commit('setActiveBug', bug)
    }

  }
})
