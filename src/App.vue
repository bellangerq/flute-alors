<script setup>
import SheetForm from "./components/SheetForm.vue";
import Sheet from "./components/Sheet.vue";
import { useSheetsStore } from "./store";

const sheetsStore = useSheetsStore();
</script>

<template>
  <main>
    <h1>Flûte alors 🪈</h1>

    <SheetForm />

    <hr />

    <ul class="sheet-list">
      <li v-for="sheet in sheetsStore.sheets" :key="sheet.name">
        <Sheet
          :name="sheet.name"
          :author="sheet.author"
          :id="sheet.id"
          :notes="sheet.notes"
          :bars="sheet.bars"
        />
      </li>
    </ul>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 1rem 0 4rem;
}

hr {
  border-color: var(--theme);
  border: none;
  margin: 4rem auto;
  text-align: center;
  width: 4rem;
}

hr::after {
  content: "🎶";
}

.sheet-list {
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding: 0 2rem 0 0;
  margin: 0;
  list-style: none;
}
</style>
