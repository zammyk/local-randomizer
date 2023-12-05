<template>
<div class="card" :style="cardStyle()">
    <p>{{ content }}</p>
</div>
</template>

<script>
export default {
  props: {
    content: String
  },
  methods: {
    cardStyle () {
      return {
        background: this.customBackgroundColor()
      }
    },
    customBackgroundColor () {
      const angle = Math.floor(Math.random() * 360)
      const color1 = this.generateRandomColor()
      const color2 = this.generateRandomColor()
      return `linear-gradient(${angle}deg, ${color1}, ${color2})`
    },
    generateRandomColor () {
      return `hsl(${Math.random() * 360},${25 + 70 * Math.random()}%,${85 + 10 * Math.random()}%)`
    }
  }
}
</script>

<style scoped>
.card {
display: flex;
flex-direction: column;
flex: 0 0 calc(100% - 1rem);
padding: 20px;
border-radius: 12px;
scroll-snap-align: start;
transition: all 0.2s;
width: 20rem;
justify-content: center;
align-items: center;
}
.card:not(:last-child) {
  margin-right: 10px;
}
p {
  font-size: 3rem;
}
</style>
