<script setup>
import { ref } from "vue";
import { kebabCase } from "lodash-es";

import { useSheetsStore } from "../store";

const sheetStore = useSheetsStore();

const name = ref("");
const author = ref("");

function onSheetSubmit() {
  sheetStore.addSheet({
    name: name.value,
    author: author.value,
    id: `${kebabCase(name.value)}-${kebabCase(author.value)}`,
    notes: [{ name: "si", value: "black" }],
    bars: 4,
  });

  name.value = "";
  author.value = "";
}
</script>

<template>
  <form @submit.prevent="onSheetSubmit" class="form">
    <div class="field">
      <label for="name">Nom</label>
      <input v-model="name" type="text" id="name" required />
    </div>
    <div class="field">
      <label for="author">Interprète</label>
      <input v-model="author" type="text" id="author" required />
    </div>
    <button type="submit">Ajouter une partition</button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

label {
  font-weight: bold;
}

input,
[type="submit"] {
  border: none;
  padding: 0.5rem 1rem;
  font: inherit;
}

input {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem 0.25rem 0 0;
  border-bottom: 2px solid var(--theme);
  transition: border-color 0.2s ease;
}

input:hover {
  border-color: var(--theme-dark);
}

[type="submit"] {
  background-color: var(--theme);
  border: 1px solid var(--theme);
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

[type="submit"]:hover {
  background-color: var(--theme-dark);
}
</style>
