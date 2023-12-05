<template>
<div id="main">
    <div class="card-container" ref="cardContainer">
        <Card v-for="card in cards" :key="card.id" :content="card.content"></Card>
    </div>
    <button @click="switchToRandomCard">Randomize</button>
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
    fetch('/static/card-content.json')
      .then(response => response.json())
      .then(data => {
        this.cards = [{
          'content': 'Welcome, press randomize to start'
        }]
        this.unusedCards = [0]
        for (let card in data.cards) {
          this.cards.push(data.cards[card])
          this.unusedCards.push(1 + parseInt(card))
        }
      })
      .catch(error => {
        console.error('Error loading JSON data:', error)
      })
  },
  methods: {
    useCurrentCard () {
      this.cards[this.currentCardIndex].used = true
      const index = this.unusedCards.indexOf(this.currentCardIndex)
      this.unusedCards.splice(index, 1)
    },
    switchToRandomCard () {
      this.useCurrentCard()
      console.log(this.unusedCards)
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
}
</style>
