<template>
  <span class="card shadow">
    <i :class="icone"></i>
    <b>{{ texto }}</b>
   </span>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      require: true
    },
    icone: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  cursor: pointer;
  padding: 12px 10px;
  margin: 0 5px;
  margin-bottom: 25px;
  border-radius: 10px;
  background: #252a2e;
  transition: background 0.3s;
}
.card:hover {
  background: var(--primary-color);
}
svg {
  font-size: 28px;
  color: white;
}
</style>
