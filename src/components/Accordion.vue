<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <details>
    <summary>{{ title }}</summary>
    <slot />
  </details>
</template>

<style scoped>
details {
  padding: 0.5rem;
}

details[open] > summary {
  margin-bottom: 1rem;
}

summary {
  font-size: 1.2rem;
}
</style>
