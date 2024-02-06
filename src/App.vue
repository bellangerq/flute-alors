<script setup>
import Sheet from "./components/Sheet.vue";
import Accordion from "./components/Accordion.vue";
import sheets from "../sheets";
</script>

<template>
  <main>
    <h1>Flûte alors 🪈</h1>

    <hr />

    <ul class="sheet-list">
      <li v-for="sheet in sheets" :key="sheet.name">
        <Sheet
          :name="sheet.name"
          :author="sheet.author"
          :id="sheet.id"
          :notes="sheet.notes"
          :bars="sheet.bars"
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
          Gros disclaimer : je pars de 0 en connaissance de la musique. Il se
          peut donc qu’il y ait des inexactitudes.
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

footer {
  margin-top: 10rem;
}

footer > * + * {
  margin-top: 1rem;
}
</style>
