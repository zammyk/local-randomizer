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
        backgroundColor: this.customBackgroundColor()
      }
    },
    customBackgroundColor () {
      return 'hsl(' + 360 * Math.random() + ',' + (25 + 70 * Math.random()) + '%,' + (85 + 10 * Math.random()) + '%)'
    }
  }
}
</script>

<style scoped>
.card {
display: flex;
flex-direction: column;
flex: 0 0 100%;
padding: 20px;
border-radius: 12px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
scroll-snap-align: start;
transition: all 0.2s;
width: 15rem;
}
.card:not(:last-child) {
  margin-right: 10px;
}
</style>
