<script>
export const NOTES_ORDER = [
  "mi'",
  "re'",
  "do'",
  "si",
  "la",
  "sol",
  "fa",
  "fa#",
  "mi",
  "re",
  "do",
];
export const NOTES_VALUE = ["black", "black dotted", "white", "white dotted"];
</script>

<script setup>
const props = defineProps({
  name: String,
  value: String,
});
</script>

<template>
  <div class="note">
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
      >
        <span v-if="name === 'do'" class="do-line" />
      </span>
    </span>
    <span class="name">
      <strong>{{ name }}</strong>
    </span>
  </div>
</template>

<style scoped>
.note {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
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
.type-fa,
.type-fa\# {
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

.do-line {
  position: absolute;
  height: 1px;
  width: 1.6rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
  background: black;
}

.stem::after {
  content: "";
  width: 2px;
  height: 2.5rem;
  position: absolute;
  right: 1px;
  background-color: black;
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
