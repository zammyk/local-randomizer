<template>
<nav class="navbar">
    <div class="container">
        <div class="title">Randomizer</div>
        <div style="margin-left: auto; display: flex; gap: 1rem; align-items: center;">
            <button @click="switchToEditor">Edit Cards</button>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  methods: {
    switchToEditor () {
      // The first argument is the event name, and the second is the data you want to pass
      this.$emit('open-card-edit', 'Open Cards Editor')
    }
  }
}
</script>

<style scoped>
.navbar {
background-color: #333;
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
}
</style>
