<template>
  <Navbar></Navbar>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar
  }
}
</script>

<style>
html,body {
  padding: 0;
  margin: 0;
}
</style>
