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
  grid-template: auto / repeat(4, 1fr);
}
</style>
