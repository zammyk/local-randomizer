<template>
<nav class="navbar">
    <div class="container">
        <div class="title">Randomizer</div>
        <div style="margin-left: auto; display: flex; gap: 1rem; align-items: center;">
            <div class="edit-button" @click="switchToEditor">
              <p v-if="!isEditorOpen">Edit Cards</p>
              <p v-else>Back</p>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  methods: {
    switchToEditor () {
      this.$emit('open-card-edit', 'Open Cards Editor')
      this.isEditorOpen = !this.isEditorOpen
    }
  },
  data () {
    return {
      isEditorOpen: false
    }
  }
}
</script>

<style scoped>
.navbar {
background-color: #444;
color: #fff;
padding: 10px 0;
}

.container {
display: flex;
align-items:end;
padding: 0 1rem;
align-items: center;
}

a {
color: #fff;
text-decoration: none;
}

.title {
font-size: 2rem;
color: black;
}

.edit-button{
  cursor: pointer;
}
.edit-button:hover {
  text-decoration: underline;
}
</style>
