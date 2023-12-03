<template>
<div id="main">
    <div class="card-container" ref="cardContainer">
        <Card :content="'hello'"></Card>
        <Card :content="'bye'"></Card>
        <Card :content="'cello'"></Card>
        <Card :content="'cy'"></Card>
        <Card :content="'dye'"></Card>
        <Card :content="'hello'"></Card>
        <Card :content="'bye'"></Card>
        <Card :content="'cello'"></Card>
        <Card :content="'cy'"></Card>
        <Card :content="'dye'"></Card>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import Card from './Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      currentCardIndex: 0
    };
  },
  methods: {
    switchToCard(index) {
      this.currentCardIndex = index;
      this.scrollToCurrentCard();
    },
    scrollToCurrentCard() {
      const cardContainer = this.$refs.cardContainer;
      const cardWidth = cardContainer.offsetWidth;
      const scrollTo = this.currentCardIndex * cardWidth;
      cardContainer.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
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
