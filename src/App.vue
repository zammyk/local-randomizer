<template>
<main class="main-window">
  <Navbar @open-card-edit="isGameEditorOpen = !isGameEditorOpen"></Navbar>
  <Game v-if="!isGameEditorOpen"></Game>
  <GameEditor v-if="isGameEditorOpen"></GameEditor>
</main>
</template>

<script scoped>
import Navbar from './components/Navbar.vue'
import Game from './components/Game.vue'
import GameEditor from './components/GameEditor.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Game,
    GameEditor
  },
  data () {
    return {
      isGameEditorOpen: false
    }
  }
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  background-color: #111;
}
.main-window {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
