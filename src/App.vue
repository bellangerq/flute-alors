<script setup>
import { ref, computed } from "vue";

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
    <hr />

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
      <Accordion title="À propos">
        <p>
          J’ai créé ce site dans pour m’aider dans l’apprentissage de la flûte
          pour regrouper les partitions des musiques et en affichant le nom des
          notes en dessous.
        </p>
        <p>
          Gros disclaimer : je pars de 0 en musique. Il se peut donc qu’il y ait
          des inexactitudes sur les partitions.
        </p>
      </Accordion>

      <Accordion title="Placement des doigts">
        <img
          src="https://musiquedemers.weebly.com/uploads/8/8/3/7/88379994/published/doigt-s-flute-a-bec.png"
          alt="placement des doigts pour la flûte à bec pour les différentes notes"
        />
        <p>
          Source :
          <a href="https://musiquedemers.weebly.com/flucircte-agrave-bec.html"
            >https://musiquedemers.weebly.com/flucircte-agrave-bec.html</a
          >
        </p>
      </Accordion>
    </footer>
  </main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
