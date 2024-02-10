<script setup>
import { computed } from "vue";

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
    type: String,
    required: true,
  },
  dotted: Boolean,
  showNotesName: Boolean,
});

const isStemDown = computed(() => {
  return ["mi'", "re'", "do'", "si"].includes(props.name);
});

const iconSrc = computed(() => {
  if (props.type === "rest") {
    return `/rests-icons/${props.value}.svg`;
  }

  if (isStemDown.value) {
    return `/notes-icons/${props.value}-down.svg`;
  } else {
    return `/notes-icons/${props.value}.svg`;
  }
});
</script>

<template>
  <div
    :class="[
      `item item-${type} ${value}`,
      { [`note-${name}`]: name },
      { 'item-dotted': dotted },
    ]"
  >
    <span class="icon-wrapper">
      <div class="icon-image">
        <img :src="iconSrc" alt="" />
        <span
          v-if="name === 'do'"
          :class="[
            'do-line',
            { shifted: value === 'eighth' || value === 'sixteenth' },
          ]"
        />
      </div>
    </span>
    <Transition>
      <span v-if="name && showNotesName" class="name">
        <strong>{{ name }}</strong>
      </span>
    </Transition>
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

.item-note .icon-image img {
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

/* Rest alignment */
.item-rest .icon-image {
  width: 1rem;
}

.item-rest .icon-image img {
  width: 100%;
}

.item-rest.whole .icon-image {
  transform: translateY(-1.3rem);
}

.item-rest.half .icon-image {
  transform: translateY(-0.7rem);
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
  bottom: 0.5rem;
  right: -0.5rem;
  width: 0.25rem;
  height: 0.25rem;
  position: absolute;
}

.item-dotted.note-mi\' .icon-image::after,
.item-dotted.note-re\' .icon-image::after,
.item-dotted.note-do\' .icon-image::after,
.item-dotted.note-si .icon-image::after {
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

/* Transition for notes name */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
