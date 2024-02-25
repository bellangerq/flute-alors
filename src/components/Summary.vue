<script setup>
defineProps({
  links: Array,
});
</script>

<template>
  <nav id="summary" class="summary" aria-labelledby="summary-title">
    <p id="summary-title">Liste des musiques</p>
    <ol>
      <li v-for="link in links">
        <a :href="`#${link.name.split(' ').join('-')}`" class="summary-link">
          {{ link.name }} — {{ link.author }}
        </a>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.summary {
  background-color: rgba(0 0 0 / 0.1);
  padding: 2rem;
  margin-bottom: 4rem;
}

.summary p {
  font-weight: bold;
  margin: 0 0 1rem;
}

.summary ol {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0 0 1rem;
  margin: 0;
}

.summary a:hover {
  text-decoration: underline;
  text-decoration-color: var(--theme-color);
  text-decoration-thickness: 0.1rem;
}
</style>
