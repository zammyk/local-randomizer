<template>
<div id="main">
    <div class="card-container">
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
  }
}
</script>

<style scoped>
.card-container {
    display: flex;
    padding: 25px 0px;
    list-style: none;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
}
#main {
width: 20rem;
padding: 0 15px;
margin: 0 auto;
}
</style>
