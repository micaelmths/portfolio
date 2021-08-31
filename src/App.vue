<template>
  <div id="app">
    <div class="nav">
      <Navbar />
    </div>
    <section class="home" id="home">
      <Home />
    </section>
    <section class="sobre" id="sobre">
      <Sobre />
    </section>
    <section class="habilidades" id="habilidades">
      <Habilidades />
    </section>
    <section class="resumo" id="resumo">
      <Resumo />
    </section>
    <section class="contato" id="contato">
      <Contato />
    </section>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
<script>
import Home from '@/views/Home.vue'
import Sobre from '@/views/Sobre.vue'
import Habilidades from '@/views/Habilidades.vue'
import Resumo from '@/views/Resumo.vue'
import Contato from '@/views/Contato.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Home,
    Sobre,
    Navbar,
    Habilidades,
    Resumo,
    Contato,
    Footer
  }
}
</script>

<style>
:root {
  --primary-color: #2a9d8f;
  --primary-color-hover: #32baaa;
  --bg-color: #1E2326;
  --bg-secundary: #252A2E;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg-color);
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
section {
  width: 100%;
}
footer {
  width: 100%;
}
button,
input {
  outline: 0;
}
button {
  cursor: pointer;
}
li {
  list-style: none;
}
a {
  text-decoration: inherit;
  color: white;
  transition: color 0.3s;
}
a:hover {
  color: var(--primary-color);
}
.text-primary {
  color: var(--primary-color) !important;
}
p {
  margin: 0;
}

svg {
  color: #FFC107;
}
</style>
