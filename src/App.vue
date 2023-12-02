<template>
<main>
  <Navbar></Navbar>
  <Game></Game>
</main>
</template>

<script scoped>
import Navbar from './components/Navbar.vue'
import Game from './components/Game.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Game
  }
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
</style>
