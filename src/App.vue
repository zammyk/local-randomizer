<template>
<main class="main-window">
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
.main-window {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
