<template>
  <div class="card-container shadow">
    <h5 class="d-flex">
      <p class="mr-4">{{ experiencia.titulo }}</p>
      <i class="text-primary">{{ experiencia.instituicao }}</i>
    </h5>
    <b class="text-primary">{{ experiencia.periodo }}</b>
    <p>{{ experiencia.descricao }}</p>
  </div>
</template>

<script>
export default {
  props: {
    experiencia: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
.mr-4 {
  margin-right: 8px;
}
.card-container {
  max-width: 800px;
  min-width: 280px;
  padding: 15px;
  background: var(--bg-secundary);
  border: 2px solid var(--primary-color);
  margin-bottom: 25px;
  border-radius: 8px;
}
h5 {
  justify-content: space-between;
}
p {
  margin: 0;
}

@media (max-width: 800px) {
  h5 {
    flex-direction: column;
  }
}
</style>
