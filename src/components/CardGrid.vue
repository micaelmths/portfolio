<template>
  <div class="grid">
    <slot />
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style>
.grid {
  display: grid;
  width: 400px;
  grid-template: auto / repeat(3, 1fr);
}
</style>
