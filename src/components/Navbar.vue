<template>
  <div class="navbar-container d-flex align-items-center" :class="isScrolling">
    <div class="navbar d-flex align-items-center col-12">
      <a href="#home">
        <h1 class="col-2">Micael</h1>
      </a>
      <nav class="col-10">
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#resumo">Resumo</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a target="_blank" href="https://micaelmths.github.io/meusite/">Blog</a></li>
        </ul>
      </nav>
      <template>
        <div class="btn-menu text-center" data-app>
          <v-menu offset-y dark transition="true">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
              color="#2a9d8f"
                elevation="2"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon color="#fff">fas fa-bars</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :href="item.href"
                :target="item.target"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      screenWidth: null,
      scrollY: null,
      items: [
        {
          title: 'Sobre',
          href: '#sobre'
        },
        {
          title: 'Habilidades',
          href: '#habilidades'
        },
        {
          title: 'Contato',
          href: '#contato'
        },
        {
          title: 'Blog',
          href: 'https://micaelmths.github.io/meusite/',
          target: '_blank'
        }
      ]
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
  width: 100%;
  height: 70px;
  justify-content: space-between;
  background: var(--bg-color);
  position: fixed;
  left: 0;
  z-index: 10;
  transition: box-shadow 0.3s;
}
.navbar {
  padding: 0 50px;
}
.btn-menu {
  display: none;
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

@media (min-width: 1400px) {
  .navbar {
    padding: 0 200px;
  }
}

@media (max-width: 850px) {
  nav {
    display: none;
  }
  .btn-menu {
    display: flex;
  }
}

</style>
