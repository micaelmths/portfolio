<template>
  <div class="footer-container">
    <p>Site desenvolvido com muito <i class="fas fa-heart"></i> 2021</p>
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
  color: red;
}
</style>
