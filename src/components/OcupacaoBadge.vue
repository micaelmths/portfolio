<template>
  <b>{{ texto }}</b>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      require: true
    }
  }

}
</script>

<style scoped>
b {
  display: inline;
  background: var(--primary-color);
  border-radius: 8px;
  padding: 3px;
  margin: 0 5px 0 0;
  word-break: normal;
}
</style>
