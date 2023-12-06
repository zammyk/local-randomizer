<template>
<div id="main">
  <div v-for="(card, index) in cards" :key="index">
    <input v-model="card.content"/>
  </div>
  <button @click="test">test button</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      cards: null
    }
  },
  mounted () {
    fetch('/static/card-content.json')
      .then(response => response.json())
      .then(data => {
        this.cards = []
        for (let card in data.cards) {
          this.cards.push(data.cards[card])
        }
        console.log(this.cards)
      })
      .catch(error => {
        console.error('Error loading JSON data:', error)
      })
  },
  methods: {
    test () {
      console.log(this.cards)
    }
  }
}
</script>

<style scoped>
#main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
