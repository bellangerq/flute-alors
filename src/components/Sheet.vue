<script setup>
import { computed } from "vue";

import SheetItem from "./SheetItem.vue";

const props = defineProps({
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
  startValue: {
    type: Number,
    required: false,
  },
  showNotesName: Boolean,
});

/**
 * TODO:
 * - add clef de sol (wrapper around bar-wrapper with same grid)
 * - add lied notes
 * - add beamed notes
 */

const chunkedItems = computed(() => {
  const result = [[]];

  // Add startValue to first note `value`
  if (props.startValue) {
    props.items[0].value += props.startValue;
  }

  const barMax = props.timeSignature[0] / props.timeSignature[1];

  // Create chunks of items where sum of value === barMax
  props.items.forEach((item) => {
    const sum = result[result.length - 1]
      .map((r) => r.value)
      .reduce((a, b) => a + b, 0);

    if (sum + item.value <= barMax) {
      result[result.length - 1].push(item);
    } else {
      result.push([item]);
    }
  });

  return result;
});
</script>

<template>
  <h2>{{ name }} — {{ author }}</h2>

  <p class="details">
    Signature de temps :
    <strong>{{ timeSignature[0] }} / {{ timeSignature[1] }}</strong>
  </p>

  <div class="bar-wrapper">
    <div
      v-for="(chunk, i) in chunkedItems"
      :key="i"
      class="bar"
      :style="{ '--bar-columns': chunk.length }"
    >
      <SheetItem
        v-for="(item, j) in chunk"
        :key="j"
        :type="item.type"
        :name="item.name"
        :value="
          i === 0 && j === 0 && startValue
            ? item.value - startValue
            : item.value
        "
        :dotted="item.dotted"
        :show-notes-name="showNotesName"
      />
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.details {
  color: rgb(0 0 0 / 0.9);
  margin: 0 0 2rem;
}

.bar-wrapper {
  --min-bar-width: 4rem;
  --sheet-columns: 16;

  display: flex;
  gap: 4rem 0;
  flex-wrap: wrap;
}

.bar {
  background: repeating-linear-gradient(
    180deg,
    black,
    black 1px,
    white 1px,
    white 1rem
  );
  height: 5rem;
  display: grid;
  grid-template-columns: repeat(var(--bar-columns), 1fr);
  grid-column: span var(--bar-columns);
  position: relative;
  padding: 0 0.5rem;
}

.bar:not(:last-child) {
  flex-grow: 1;
}

.bar::after {
  content: "";
  top: 0;
  right: 0;
  bottom: 1rem;
  background-color: black;
  position: absolute;
  width: 1px;
}

.bar:last-child::after {
  width: 0.4rem;
}

.bar:last-child::before {
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
