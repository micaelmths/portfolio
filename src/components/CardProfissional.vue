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
  padding: 15px;
  background: var(--bg-secundary);
  border-left: 2px solid var(--primary-color);
  margin-left: 50px;
  margin-bottom: 25px;

  position: relative;
}
.card-container::after {
  content: '';
  display: inline-block;
  position: absolute;
  background-color: var(--primary-color);
  border-radius: 10px;
  width: 43px;
  height: 2px;
  top: 50%;
  left: -43px;
  z-index: 1;
}
.card-container::before {
  content: '';
  display: inline-block;
  position: absolute;
  background-color: var(--primary-color);
  border-radius: 10px;
  width: 12px;
  height: 12px;
  top: 50%;
  left: -47px;
  border: 2px solid var(--primary-color);
  z-index: 2;
  transform: translateY(-45%);
}
p {
  margin: 0;
}
</style>
