<template>
  <div class="footer-container">
    <p>Site desenvolvido em Vue.js  <i class="fab fa-vuejs"></i></p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: var(--bg-color);
}
p > svg {
  color: var(--primary-color)
}
</style>
