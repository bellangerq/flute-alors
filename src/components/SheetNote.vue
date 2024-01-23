<script>
export const NOTES_ORDER = [
  "mi'",
  "re'",
  "do'",
  "si",
  "la",
  "sol",
  "fa",
  "mi",
  "re",
  "do",
];
export const NOTES_VALUE = ["black", "black dotted", "white", "white dotted"];
</script>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "la",
  },
  value: {
    type: String,
    default: "black",
  },
  selected: Boolean,
});

defineEmits(["selectOrUpdateValue", "updateNote", "deleteNote"]);
</script>

<template>
  <button
    @click="$emit('selectOrUpdateValue')"
    @keydown.up.prevent="$emit('updateNote', 'up')"
    @keydown.down.prevent="$emit('updateNote', 'down')"
    @keydown.delete.prevent="$emit('deleteNote')"
    :class="['note', { 'note-selected': selected }]"
  >
    <span class="icon">
      <span
        :class="[
          `type type-${name} stem ${
            NOTES_ORDER.findIndex((el) => el === name) >
            NOTES_ORDER.indexOf('si')
              ? 'stem-rising'
              : 'stem-descending'
          }`,
          ...NOTES_VALUE.map((v) => {
            return { [value]: v === value };
          }),
        ]"
      />
    </span>
    <span class="name">
      <strong>{{ name }}</strong>
    </span>
  </button>
</template>

<style scoped>
.note {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  position: relative;
}

/* Layer to allow click even on note icon */
.note::after {
  content: "";
  inset: 0;
  position: absolute;
}

.note:not(.note-selected):hover {
  outline: 2px dashed grey;
}

.note-selected {
  outline: 2px dashed black;
}

.icon {
  display: flex;
  align-items: center;
  height: 5rem;
}

.name {
  text-transform: capitalize;
}

.type {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 65% 25%;
  background-color: black;
  border: 2px solid;
  position: relative;
}

.type-mi\' {
  transform: translateY(-2rem);
}
.type-re\' {
  transform: translateY(-1.5rem);
}
.type-do\' {
  transform: translateY(-1rem);
}
.type-si {
  transform: translateY(-0.5rem);
}
.type-sol {
  transform: translateY(0.5rem);
}
.type-fa {
  transform: translateY(1rem);
}
.type-mi {
  transform: translateY(1.5rem);
}
.type-re {
  transform: translateY(2rem);
}
.type-do {
  transform: translateY(2.5rem);
}

.stem::after {
  content: "";
  width: 2px;
  height: 2.5rem;
  position: absolute;
  right: 1px;
  background-color: black;
  /* z-index: -1; */
}
.stem-rising::after {
  bottom: 40%;
  right: -1px;
}

.stem-descending::after {
  top: 40%;
  left: -1px;
}

/* VALUE */
.dotted::before {
  content: "";
  border-radius: 50%;
  background: black;
  top: calc(50% - 0.125rem);
  right: -0.5rem;
  width: 0.25rem;
  height: 0.25rem;
  position: absolute;
}

.white {
  background-color: white;
}
</style>
