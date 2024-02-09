<script setup>
import { chunk } from "lodash-es";
import { computed } from "vue";

import { NOTES_VALUES } from "../settings";
import SheetItem from "./SheetItem.vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  timeSignature: {
    type: Array,
    required: false,
    default: () => [4, 4],
  },
});

/**
 * TODO:
 * - split sheet by bar (fitted with notes + rests)
 * - (add beamed notes)
 */
const chunkedItems = computed(() => {
  return chunk(props.items, 4);
});

// const test = computed(() => {
//   const notesValues = props.items.map((n) => NOTES_VALUES[n.value]);
//   const result = [];
//   const barMax = props.timeSignature[0] / props.timeSignature[1];

//   // Divide notes by chunk of `barMax` sum
//   // See: https://stackoverflow.com/a/49403706
//   notesValues.forEach((v) => {
//     const chunk = result.find((c) => {
//       const sum = c.reduce((a, b) => a + b);

//       return sum + v <= barMax;
//     });

//     if (chunk) {
//       chunk.push(v);
//     } else {
//       result.push([v]);
//     }
//   });

//   return result;
// });
</script>

<template>
  <h2>
    {{ name }} — {{ author }} ({{ timeSignature[0] }} / {{ timeSignature[1] }})
  </h2>
  <div class="sheet-wrapper">
    <div v-for="(chunk, i) in chunkedItems" :key="i" class="sheet">
      <SheetItem
        v-for="(item, j) in chunk"
        :key="j"
        :type="item.type"
        :name="item.name"
        :value="item.value"
        :dotted="item.dotted"
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
  grid-template-columns: repeat(4, 1fr);
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
</style>
