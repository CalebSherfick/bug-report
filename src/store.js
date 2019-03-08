import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

const _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/contineur',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    bugDetails: []
  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    setActiveBug(state, bug) {
      state.activeBug = bug
    },
    bugDetails(state, data) {
      state.bugDetails = data
    }
  },
  actions: {
    //GET
    getAllBugs({ commit, dispatch }) {
      _sandbox.get('bugs')
        .then(res => {
          commit('setBugs', res.data.data)
        })
    },
    getActiveBug({ commit, dispatch }) {
      _sandbox.get(`bugs/${this.state.activeBug._id}`)
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
    setActiveBug({ commit, dispatch }, bug) {
      commit('setActiveBug', bug)
    }
  }
})
