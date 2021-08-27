<template>
  <div class="navbar-container d-flex align-items-center" :class="isScrolling">
    <div class="d-flex align-items-center col-12">
      <a href="#home">
        <h1 class="col-2">Micael</h1>
      </a>
      <nav class="col-10">
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#resumo">Resumo</a></li>
          <li><a href="#portifolio">Portifólio</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a target="_blank" href="https://micaelmths.github.io/meusite/">Blog</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollY: null
    }
  },
  computed: {
    isScrolling () {
      return this.scrollY > 65 ? 'isScrolling' : ''
    }
  },
  mounted () {
    document.addEventListener('scroll', (event) => {
      this.scrollY = window.scrollY
    })
  }
}
</script>

<style scoped>
.navbar-container {
  width: 100vw;
  height: 70px;
  background: var(--bg-color);
  position: fixed;
  left: 0;
  padding: 0 200px;
  z-index: 99;
  transition: box-shadow 0.3s;
}
.isScrolling {
  box-shadow: -1px 8px 9px -1px rgba(0, 0, 0, 0.25);
}
ul {
  display: flex;
  margin: 0;
  float: right;
}
h1 {
  color: var(--primary-color);
  margin: 0;
  cursor: pointer;
  user-select: none;
}
li {
  padding: 0 10px;
}
a:hover {
  color: var(--primary-color);
}
</style>
