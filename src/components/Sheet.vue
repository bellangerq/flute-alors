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

// Based on https://en.wikipedia.org/wiki/Note_value
const VALUES = {
  whole: 1,
  half: 1 / 2,
  quarter: 1 / 4,
  eighth: 1 / 8,
  sixteenth: 1 / 16,
};

// Create chunks of items where sum of totalValue === barMax
const chunkedItems = computed(() => {
  const result = [[]];

  // Compute max notes/rests values for a bar
  const barMax = props.timeSignature[0] / props.timeSignature[1];

  props.items
    // Compute note value based on dot and/or startValue for first bar.
    .map((item, index) => {
      return {
        ...item,
        totalValue:
          VALUES[item.value] +
          (item.dotted ? VALUES[item.value] / 2 : 0) +
          (index === 0 && props.startValue ? props.startValue : 0),
      };
    })
    .forEach((item) => {
      const sum = result[result.length - 1]
        .map((r) => r.totalValue)
        .reduce((a, b) => a + b, 0);

      if (sum + item.totalValue <= barMax) {
        result[result.length - 1].push(item);
      } else {
        result.push([item]);
      }
    });

  return result;
});
</script>

<template>
  <div class="heading">
    <h2 :id="`${name.split(' ').join('-')}`">{{ name }} — {{ author }}</h2>
    <small><a href="#summary">Sommaire ↑</a></small>
  </div>

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
        :value="item.value"
        :dotted="item.dotted"
        :tied="item.tied"
        :tied-across-bars="
          (item.tied === 'start' && j === chunk.length - 1) ||
          (item.tied === 'end' && j === 0)
        "
        :show-notes-name="showNotesName"
      />
    </div>
  </div>
</template>

<style scoped>
.heading {
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0;
  gap: 1rem;
}

.heading a:hover {
  text-decoration: underline;
  text-decoration-color: var(--theme-color);
  text-decoration-thickness: 0.1rem;
}

h2 {
  margin: 0;
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
  padding-bottom: 4rem;
}

.bar {
  --bar-inline-padding: 0.5rem;

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
  position: relative;
  padding: 0 var(--bar-inline-padding);
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
