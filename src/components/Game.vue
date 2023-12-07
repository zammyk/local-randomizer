<template>
<div id="main">
    <div class="card-container" ref="cardContainer">
        <Card v-for="card in cards" :key="card.id" :content="card.content"></Card>
    </div>
    <div class="buttons">
      <nav>
        <div @click="switchToRandomCard">
          Randomize
          <span></span><span></span><span></span><span></span>
        </div>
        <div @click="resetState">
          Reset
          <span></span><span></span><span></span><span></span>
        </div>
      </nav>
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
.buttons nav{
display: flex;
gap: 5rem;
}

nav div {
    --c: #444;
    color: var(--c);
    font-size: 16px;
    border: 0.3em solid var(--c);
    border-radius: 0.5em;
    width: 12em;
    height: 3em;
    text-transform: uppercase;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 3em;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    margin: 1em;
}

nav div span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
}

nav div:hover {
    color: black;
}

nav div:hover span {
    transform: translateY(0) scale(2);
}

nav div span:nth-child(1) {
    --n: 1;
}

nav div span:nth-child(2) {
    --n: 2;
}

nav div span:nth-child(3) {
    --n: 3;
}

nav div span:nth-child(4) {
    --n: 4;
}
</style>
