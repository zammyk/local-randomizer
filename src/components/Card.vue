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
border: 1px solid #ccc;
border-radius: 8px;
padding: 16px;
margin: 16px;
width: 300px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
