<script setup>
import { chunk } from "lodash-es";
import { onMounted, ref, computed } from "vue";

import SheetNote, { NOTES_ORDER, NOTES_VALUE } from "./SheetNote.vue";
import { useSheetsStore } from "../store";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  notes: {
    type: Array,
    required: true,
  },
  bars: {
    type: Number,
    required: false,
    default: 4,
  },
});

const sheetsStore = useSheetsStore();

/**
 * Select a note or update its value if its already selected
 * @param {number} index
 */
function handleNoteClick(chunkIndex, noteInChunk) {
  const finalNoteIndex =
    chunkIndex === 0 ? noteInChunk : chunkIndex * props.bars + noteInChunk;
  if (selectedIndex.value === finalNoteIndex) {
    sheetsStore.updateNoteValue(props.id, finalNoteIndex);
  } else {
    selectedIndex.value = finalNoteIndex;
  }
}

onMounted(() => {
  window.addEventListener("click", (e) => {
    if (
      ["note", "sheet-new-button"].every((c) => !e.target.classList.contains(c))
    ) {
      selectedIndex.value = null;
    }
  });
});

function addNote() {
  sheetsStore.addSheetNote(props.id, {
    name: NOTES_ORDER[0],
    value: NOTES_VALUE[0],
  });

  selectedIndex.value = props.notes.length - 1;
}

function updateNote(direction) {
  sheetsStore.updateNoteName(props.id, selectedIndex.value, direction);
}

function deleteNote() {
  sheetsStore.deleteSheetNote(props.id, selectedIndex.value);
  selectedIndex.value = null;
}

const chunkedNotes = computed(() => {
  return chunk(props.notes, props.bars);
});

const selectedIndex = ref();
</script>

<template>
  <h2>{{ name }} — {{ author }}</h2>
  <div class="sheet-wrapper">
    <div v-for="(chunk, i) in chunkedNotes" :key="i" class="sheet">
      <div class="sheet-notes">
        <SheetNote
          v-for="(note, j) in chunk"
          :key="j"
          :name="note.name"
          :value="note.value"
          :selected="selectedIndex === (i === 0 ? j : i * bars + j)"
          @select-or-update-value="handleNoteClick(i, j)"
          @update-note="updateNote"
          @delete-note="deleteNote"
        />
      </div>
      <button
        class="sheet-new-button"
        v-if="i === chunkedNotes.length - 1"
        @click="addNote"
        aria-label="Ajouter une note"
      >
        +
      </button>
    </div>
  </div>
</template>

<style scoped>
.sheet-wrapper {
  --min-sheet-width: 12rem;

  display: grid;
  gap: 4rem 0;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, var(--min-sheet-width)), 1fr)
  );
  max-width: 60rem;
}

.sheet {
  position: relative;
  height: 5rem;
}

.sheet::after {
  content: "";
  top: 0;
  right: 0;
  bottom: 1rem;
  background-color: black;
  position: absolute;
  width: 1px;
}

.sheet-notes {
  background: repeating-linear-gradient(
    180deg,
    black,
    black 1px,
    white 1px,
    white 1rem
  );
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(v-bind(bars), 1fr);
}

.sheet-new-button {
  font: inherit;
  background-color: var(--theme);
  border: 1px solid var(--theme);
  font-weight: bold;
  color: white;
  transition: background-color 0.2s ease;
  padding: 0;
  position: absolute;
  left: calc(100% + 0.5rem);
  top: 0;
  bottom: 1rem;
  width: 2rem;
  cursor: pointer;
}

.sheet-new-button:hover {
  background-color: var(--theme-dark);
}
</style>
