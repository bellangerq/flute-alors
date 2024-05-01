<script setup>
import { ref } from "vue";

import Summary from "./components/Summary.vue";
import Sheet from "./components/Sheet.vue";
import Accordion from "./components/Accordion.vue";
import sheets from "../sheets";

const showNotesName = ref(true);
</script>

<template>
  <header>
    <h1>Flûte alors 🪈</h1>

    <div class="show-notes-names">
      <label for="showNotesName">Afficher le nom des notes</label>
      <input type="checkbox" id="showNotesName" v-model="showNotesName" />
    </div>
  </header>

  <main>
    <Summary :links="sheets.map((s) => ({ name: s.name, author: s.author }))" />

    <ul class="sheet-list">
      <li v-for="sheet in sheets" :key="sheet.name">
        <Sheet
          :name="sheet.name"
          :author="sheet.author"
          :items="sheet.items"
          :time-signature="sheet.timeSignature"
          :start-value="sheet.startValue"
          :show-notes-name="showNotesName"
        />
      </li>
    </ul>

    <hr />

    <footer>
      <Accordion title="Liens d’aide">
        <ul>
          <li>
            Tablatures et placement des doigts pour les différentes octaves
            <a href="https://www.flute-a-bec.com/tablature.html">
              https://www.flute-a-bec.com/tablature.html</a
            >.
          </li>
        </ul>
      </Accordion>
    </footer>
  </main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

h1 {
  text-align: center;
  margin: 0;
  text-decoration: underline;
  text-decoration-color: var(--theme-color);
  text-decoration-thickness: 0.25rem;
}

.show-notes-names {
  align-items: center;
  gap: 0.5rem;
  display: flex;
}

label {
  font-size: 1.2rem;
}

[type="checkbox"] {
  height: 1.5rem;
  width: 1.5rem;
  accent-color: var(--theme-color);
}

hr {
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
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: hidden;
}

footer {
  margin-top: 10rem;
}

footer > * + * {
  margin-top: 1rem;
}
</style>
