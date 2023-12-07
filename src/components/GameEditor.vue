<template>
<div id="main">
  <div v-for="(card, index) in cards" :key="index">
    <input v-model="card.content"/>
  </div>
  <div>
    <nav @click="updateCards">
        <div>
          Update
          <span></span><span></span><span></span><span></span>
        </div>
    </nav>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      cards: null
    }
  },
  mounted () {
    this.cards = this.$store.state.cards
  },
  methods: {
    updateCards () {
      this.$store.commit('setCards', this.cards)
      alert('Cards have been updated')
    }
  }
}
</script>

<style scoped>
#main {
flex: 1;
display: flex;
flex-direction: column;
padding: 5rem 5rem 0 5rem;
align-items: center;
gap: 0.25rem
}
input, button {
  font-size: 2rem;
}
input {
  width: 75rem;
}

nav div {
--c: #444;
color: var(--c);
font-size: 16px;
border: 0.3em solid var(--c);
border-radius: 0.5em;
width: 12em;
height: 3em;
text-transform: uppercase;
font-weight: 800;
letter-spacing: 0.1em;
text-align: center;
line-height: 3em;
position: relative;
overflow: hidden;
z-index: 1;
transition: 0.5s;
margin: 1em;
cursor: pointer;
}

nav div span {
position: absolute;
width: 25%;
height: 100%;
background-color: var(--c);
transform: translateY(150%);
border-radius: 50%;
left: calc((var(--n) - 1) * 25%);
transition: 0.5s;
transition-delay: calc((var(--n) - 1) * 0.1s);
z-index: -1;
}

nav div:hover {
color: black;
}

nav div:hover span {
transform: translateY(0) scale(2);
}

nav div span:nth-child(1) {
--n: 1;
}

nav div span:nth-child(2) {
--n: 2;
}

nav div span:nth-child(3) {
--n: 3;
}

nav div span:nth-child(4) {
--n: 4;
}
</style>
