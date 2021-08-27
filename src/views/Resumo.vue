<template>
  <div class="resumo-container">
    <div class="sessao-head d-flex">
      <span class="shadow p-3 rounded text-warning mb-2">
        <i class="fab fa-readme"></i>
      </span>
      <h1>Resumo</h1>
    </div>
    <div class="content col-12">
      <div class="row col-6 d-flex justify-content-center">
        <h3 class="text-center">Educação</h3>
        <div class="content-formacao">
          <CardEducacao
            v-for="(item, i) in experienciasEducacionais"
            :key="i"
            :experiencia="item"
          />
        </div>
      </div>
      <div class="row col-6 d-flex justify-content-center">
        <h3 class="text-center">Experiência no Mercado</h3>
        <div class="content-experiencias">
          <CardProfissional
            v-for="(item, i) in experienciasProfissionais"
            :key="i"
            :experiencia="item"
          />
        </div>
      </div>
      <div class="container-card-default">
        <CardExperienciasDefault
          v-for="(item, i) in experienciasDefault"
          :key="i"
          :experiencia="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardEducacao from '@/components/CardEducacao.vue'
import CardProfissional from '@/components/CardProfissional.vue'
import CardExperienciasDefault from '@/components/CardExperienciasDefault.vue'
import mocks from '../data/mocks.json'
export default {
  components: {
    CardEducacao,
    CardProfissional,
    CardExperienciasDefault
  },
  computed: {
    experienciasEducacionais () {
      return mocks.experienciasEducacionais
    },
    experienciasProfissionais () {
      return mocks.experienciasProfissionais
    },
    experienciasDefault () {
      const todas = []
      todas.push(...mocks.experienciasEducacionais)
      todas.push(...mocks.experienciasProfissionais)
      return todas
    }
  }
}
</script>

<style scoped>
.resumo-container {
  display: flex;
  flex-direction: column;
  background: var(--bg-color);
  align-items: center;
  padding: 0 200px;
  width: 100%;
  height: 700px;
  padding-top: 75px;
}
.content
.sessao-head > span {
  background: #252a2e;
}
.sessao-head {
  width: 100%;
  flex-direction: column;
  align-items: center;
}
.content {
  display: flex;
}
.content-formacao {
  height: 100%;
  min-height: 200px;
  border-right: 1px solid #333;
}
.content-experiencias {
  height: 100%;
  min-height: 200px;
  border-left: 1px solid #333;
}
.container-card-default {
  display: none;
}
li {
  margin-top: 10px;
}
svg {
  font-size: 35px;
}

@media (max-width: 1450px) {
  .row {
    display: none !important;
  }
  .container-card-default {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  .resumo-container {
    height: auto;
  }
}
</style>
