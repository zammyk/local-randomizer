/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cards: []
  },
  mutations: {
    setCards (state, cards) {
      state.cards = cards
    }
  },
  actions: {
    async initCards () {
      console.log('here')
      fetch('/static/card-content.json')
        .then(response => response.json())
        .then(data => {
          let cards = []
          for (let card in data.cards) {
            cards.push(data.cards[card])
          }
          commit('setCards', cards)
        })
        .catch(error => {
          console.error('Error loading JSON data:', error)
        })
    }
  },
  getters: {
  },
  modules: {
    // For structuring your store with modules (if needed)
  }
})

export default store
