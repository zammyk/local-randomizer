<template>
<div id="main">
    <div class="card-container" ref="cardContainer">
        <Card v-for="card in cardData.cards" :key="card.id" :content="card.content"></Card>
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
      cardData: null
    }
  },
  mounted () {
    fetch('/static/card-content.json')
      .then(response => response.json())
      .then(data => {
        this.cardData = data
      })
      .catch(error => {
        console.error('Error loading JSON data:', error)
      })
  },
  methods: {
    switchToCard (index) {
      this.currentCardIndex = index
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
}
#main {
width: 20rem;
padding: 0 15px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
</style>
