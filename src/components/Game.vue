<template>
<div id="main">
    <div class="card-container" ref="cardContainer">
        <Card v-for="card in cards" :key="card.id" :content="card.content"></Card>
    </div>
    <div class="buttons">
      <button @click="switchToRandomCard">Randomize</button>
      <button @click="resetState">Reset</button>
    </div>
</div>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card
  },
  data () {
    return {
      currentCardIndex: 0,
      cards: null,
      unusedCards: null
    }
  },
  mounted () {
    this.resetState()
  },
  methods: {
    useCurrentCard () {
      this.cards[this.currentCardIndex].used = true
      const index = this.unusedCards.indexOf(this.currentCardIndex)
      this.unusedCards.splice(index, 1)
    },
    switchToRandomCard () {
      this.useCurrentCard()
      // TODO: Add a final game over/ play again card if unusedCards is empty
      this.currentCardIndex = this.unusedCards[Math.floor(Math.random() * this.unusedCards.length)]
      this.scrollToCurrentCard()
    },
    scrollToCurrentCard () {
      const cardContainer = this.$refs.cardContainer
      const cardWidth = cardContainer.offsetWidth
      const scrollTo = this.currentCardIndex * cardWidth
      cardContainer.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      })
    },
    async resetState () {
      if (this.$store.state.cards.length === 0) {
        await this.$store.dispatch('initCards')
      }
      this.cards = [{
        'content': 'Welcome, press randomize to start'
      }]
      this.unusedCards = [0]
      for (let card in this.$store.state.cards) {
        this.cards.push(this.$store.state.cards[card])
        this.unusedCards.push(1 + parseInt(card))
      }
      this.currentCardIndex = 0
      this.scrollToCurrentCard()
    }
  }
}
</script>

<style scoped>
.card-container {
display: flex;
padding: 25px 1rem;
list-style: none;
overflow-x: scroll;
scroll-snap-type: x mandatory;
width: 20rem;
height: 30rem;
}
#main {
width: 20rem;
padding: 0 15px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 3rem;
flex: 1;
background-color: #111;
}
.buttons {
display: flex;
gap: 5rem;
}
button {
font-size: 1.5rem;
padding: 0.5rem 0;
width: 12rem;
border: none;
color: white;
background-color: #333;
border-radius: 2px;
}
</style>
