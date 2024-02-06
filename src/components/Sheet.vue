<script setup>
import { chunk } from "lodash-es";
import { computed } from "vue";

import SheetNote from "../components/SheetNote.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  author: {
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

const chunkedNotes = computed(() => {
  return chunk(props.notes, props.bars);
});
</script>

<template>
  <h2>{{ name }} — {{ author }}</h2>
  <div class="sheet-wrapper">
    <div v-for="(chunk, i) in chunkedNotes" :key="i" class="sheet">
      <SheetNote
        v-for="(note, j) in chunk"
        :key="j"
        :name="note.name"
        :value="note.value"
      />
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
  background: repeating-linear-gradient(
    180deg,
    black,
    black 1px,
    white 1px,
    white 1rem
  );
  height: 5rem;
  display: grid;
  grid-template-columns: repeat(v-bind(bars), 1fr);
  position: relative;
  padding: 0 0.5rem;
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

.sheet:last-child::after {
  width: 0.4rem;
}

.sheet:last-child::before {
  content: "";
  top: 0;
  right: 0.6rem;
  bottom: 1rem;
  background-color: black;
  position: absolute;
  width: 1px;
  z-index: 1;
}

.sheet-notes {
  /* background: repeating-linear-gradient(
    180deg,
    black,
    black 1px,
    white 1px,
    white 1rem
  ); */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  min-width: 100%;
  /* display: grid;
  grid-template-columns: repeat(v-bind(bars), 1fr); */
}
</style>
