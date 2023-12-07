/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cards: []
  },
  mutations: {
    setCards(state, cards) {
      state.cards = cards;
    }
  },
  actions: {
    async initCards({ commit }) {
      try {
        const response = await fetch('/static/card-content.json');
        const data = await response.json();

        let cards = Object.values(data.cards);
        commit('setCards', cards);
      } catch (error) {
        console.error('Error loading JSON data:', error);
      }
    }
  },
  getters: {
    getCards: (state) => {
      return state.cards
    }
  },
  modules: {
    // For structuring your store with modules (if needed)
  }
});

export default store;