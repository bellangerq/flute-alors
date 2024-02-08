<script setup>
import { computed } from "vue";

const props = defineProps({
  name: String,
  value: String,
  dotted: Boolean,
});

const isStemDown = computed(() => {
  return ["mi'", "re'", "do'", "si"].includes(props.name);
});

const iconSrc = computed(() => {
  if (isStemDown.value) {
    return `/notes-icons/${props.value}-down.svg`;
  } else {
    return `/notes-icons/${props.value}.svg`;
  }
});
</script>

<template>
  <div :class="[`note note-${name}`, { 'note-dotted': dotted }]">
    <span class="icon-wrapper">
      <div class="icon-image">
        <img :src="iconSrc" alt="" />
        <span
          v-if="name === 'do'"
          :class="['do-line', { shifted: value === 'eighth' }]"
        />
      </div>
    </span>
    <span class="name">
      <strong>{{ name }}</strong>
    </span>
  </div>
</template>

<style scoped>
/* Layout */
.note {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
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

.icon-image img {
  height: 3rem;
}

.name {
  text-transform: capitalize;
}

/* Vertical alignment for notes */
.note-mi\' .icon-image {
  transform: translateY(-0.95rem);
}
.note-re\' .icon-image {
  transform: translateY(-0.45rem);
}
.note-do\' .icon-image {
  transform: translateY(0.1rem);
}
.note-si .icon-image {
  transform: translateY(0.55rem);
}
.note-la .icon-image {
  transform: translateY(-1rem);
}
.note-sol .icon-image {
  transform: translateY(-0.5rem);
}
.note-mi .icon-image {
  transform: translateY(0.5rem);
}
.note-re .icon-image {
  transform: translateY(1rem);
}
.note-do .icon-image {
  transform: translateY(1.5rem);
}

/* Dotted notes */
.note-dotted .icon-image::after {
  content: "";
  border-radius: 50%;
  background: black;
  bottom: 0.5rem;
  right: -0.5rem;
  width: 0.25rem;
  height: 0.25rem;
  position: absolute;
}

.note-dotted.note-mi\' .icon-image::after,
.note-dotted.note-re\' .icon-image::after,
.note-dotted.note-do\' .icon-image::after,
.note-dotted.note-si .icon-image::after {
  top: 0.5rem;
  bottom: auto;
}

/* Sheet line for do */

.do-line {
  position: absolute;
  height: 1px;
  width: 1.6rem;
  left: 50%;
  bottom: 0.4rem;
  transform: translate(-50%);
  background: black;
}

/* SVG for eighth-down is wider than the other ones... */
.do-line.shifted {
  left: 35%;
}
</style>
