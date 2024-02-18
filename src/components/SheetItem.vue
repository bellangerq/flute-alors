<script setup>
import { ref, computed, onMounted } from "vue";
import NoteIcon from "./NoteIcon.vue";
import RestIcon from "./RestIcon.vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  value: {
    type: Number,
    required: true,
  },
  dotted: Boolean,
  tied: "start" | "end",
  tiedAcrossBars: Boolean,
  showNotesName: Boolean,
});

// Based on https://en.wikipedia.org/wiki/Note_value
const VALUES_NAMES = {
  whole: 1,
  half: 1 / 2,
  quarter: 1 / 4,
  eighth: 1 / 8,
  sixteenth: 1 / 16,
};

const valueName = computed(() => {
  return Object.keys(VALUES_NAMES).find(
    (key) => VALUES_NAMES[key] === props.value
  );
});

const isStemDown = computed(() => {
  return ["mi'", "re'", "do'", "si"].includes(props.name);
});

const itemRef = ref(null);
const itemWidth = ref(0);

onMounted(() => {
  if (itemRef.value) {
    itemWidth.value = itemRef.value.offsetWidth;
  }
});
</script>

<template>
  <div
    ref="itemRef"
    :class="[
      `item item-${type} ${valueName}`,
      { [`note-${name}`]: name },
      { 'item-dotted': dotted },
      { 'item-tied-start': tied === 'start' },
      { 'item-tied-end': tied === 'end' },
      { 'item-tied-across-bars': tiedAcrossBars },
      { 'item-stem-down': isStemDown },
    ]"
    :style="{ '--item-width': `${itemWidth}px` }"
  >
    <span class="icon-wrapper">
      <div class="icon-image">
        <RestIcon v-if="type === 'rest'" :name="valueName" />
        <NoteIcon v-else :name="valueName" :is-stem-down="isStemDown" />
        <span
          v-if="name === 'do'"
          :class="[
            'do-line',
            { shifted: valueName === 'eighth' || valueName === 'sixteenth' },
          ]"
        />
      </div>
    </span>
    <span v-if="name" :class="['name', { hide: !showNotesName }]">
      <strong>{{ name }}</strong>
    </span>
  </div>
</template>

<style scoped>
/* Layout */
.item {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 0.4rem;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  height: 5rem;
}

.icon-image {
  display: flex;
  position: relative;
}

.name {
  text-transform: capitalize;
  transition: opacity 0.2s ease;
}

.name.hide {
  opacity: 0;
}

/* Vertical alignment for notes (except whole) */
.note-mi\':not(.whole) .icon-image {
  transform: translateY(-0.95rem);
}
.note-re\':not(.whole) .icon-image {
  transform: translateY(-0.45rem);
}
.note-do\':not(.whole) .icon-image {
  transform: translateY(0.1rem);
}
.note-si:not(.whole) .icon-image {
  transform: translateY(0.55rem);
}
.note-la:not(.whole) .icon-image {
  transform: translateY(-1rem);
}
.note-sol:not(.whole) .icon-image {
  transform: translateY(-0.5rem);
}
.note-mi:not(.whole) .icon-image {
  transform: translateY(0.5rem);
}
.note-re:not(.whole) .icon-image {
  transform: translateY(1rem);
}
.note-do:not(.whole) .icon-image {
  transform: translateY(1.5rem);
}

/* Vertical alignment for whole notes */
.note-mi\'.whole .icon-image {
  transform: translateY(-3.1rem);
}
.note-re\'.whole .icon-image {
  transform: translateY(-2.6rem);
}
.note-do\'.whole .icon-image {
  transform: translateY(-2.1rem);
}
.note-si.whole .icon-image {
  transform: translateY(-1.6rem);
}
.note-la.whole .icon-image {
  transform: translateY(-1.1rem);
}
.note-sol.whole .icon-image {
  transform: translateY(-0.6rem);
}
.note-mi.whole .icon-image {
  transform: translateY(0.4rem);
}
.note-re.whole .icon-image {
  transform: translateY(0.9rem);
}
.note-do.whole .icon-image {
  transform: translateY(1.3rem);
}

/* Rest alignment */
.item-rest.whole .icon-image {
  transform: translateY(-1.3rem);
}

.item-rest.half .icon-image {
  transform: translateY(-0.6rem);
}

.item-rest.quarter .icon-image {
  transform: translateY(-0.5rem);
}

.item-rest.eighth .icon-image {
  transform: translateY(-0.3rem);
}

/* Dotted items */
.item-dotted .icon-image::after {
  content: "";
  border-radius: 50%;
  background: black;
  bottom: 1.1rem;
  right: -0.3rem;
  width: 0.25rem;
  height: 0.25rem;
  position: absolute;
}

.item-dotted.note-mi\' .icon-image::after,
.item-dotted.note-re\' .icon-image::after,
.item-dotted.note-do\' .icon-image::after,
.item-dotted.note-si .icon-image::after {
  top: 1.1rem;
}

.item-dotted.eighth .icon-image::after,
.item-dotted.sixteenth .icon-image::after {
  right: -0.2rem;
}

.item-dotted.whole .icon-image::after {
  top: 3.7rem;
}

/* Tied notes */
.item-tied-start .icon-image::before,
.item-tied-end .icon-image::before {
  content: "";
  height: 1rem;
  width: var(--item-width);
  border-bottom: 3px solid black;
  position: absolute;
  bottom: 0.4rem;
  border-radius: 0 0 50% 50%;
}

.item-tied-start .icon-image::before {
  left: 50%;
  clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%);
}

.item-tied-end .icon-image::before {
  right: 50%;
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
}

.item-tied-start.item-stem-down .icon-image::before,
.item-tied-end.item-stem-down .icon-image::before {
  bottom: auto;
  top: 0.4rem;
  transform: scaleY(-1);
}

.item-tied-across-bars .icon-image::before {
  width: calc(var(--item-width) + calc(var(--bar-inline-padding) * 2));
}

/* Sheet line for do */
.do-line {
  position: absolute;
  height: 1px;
  width: 1.6rem;
  left: 50%;
  bottom: 1.3rem;
  transform: translate(-50%);
  background: black;
}

/* Shift 'do' line for wider notes */
.do-line.shifted {
  left: 30%;
}
</style>
