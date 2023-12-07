<template>
<div id="main">
  <div v-for="(card, index) in cards" :key="index">
    <input v-model="card.content"/>
  </div>
  <button @click="updateCards">Update</button>
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
    this.cards = this.$store.state.cards
  },
  methods: {
    updateCards () {
      this.$store.commit('setCards', this.cards)
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
