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

details :deep(a) {
  text-decoration: underline;
  text-decoration-color: var(--theme-color);
  text-decoration-thickness: 0.1rem;
}

details :deep(a:hover) {
  text-decoration: none;
}
</style>
