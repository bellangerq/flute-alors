import { defineStore } from "pinia";
import { kebabCase } from "lodash-es";

import { NOTES_ORDER, NOTES_VALUE } from "./components/SheetNote.vue";

const defaultStateSheets = [
  {
    name: "Ensemble",
    author: "Jean-Jacques Goldman",
    id: `${kebabCase("Ensemble")}-${kebabCase("Jean-Jacques Goldman")}`,
    notes: [
      { name: "re", value: "black" },
      { name: "re", value: "black" },
      { name: "re", value: "black" },
      { name: "re", value: "white" },
      { name: "fa", value: "black" },
      { name: "sol", value: "black" },
      { name: "fa", value: "black" },
      { name: "mi", value: "black" },
      { name: "mi", value: "black" },
      { name: "re", value: "black" },
      { name: "do", value: "black" },
      { name: "mi", value: "black" },
    ],
    bars: 4,
  },
];

const LOCAL_STORAGE_ID = "flute-alors";

// Get default state or the one in the localstorage
function getInitialState() {
  const localStorageState = localStorage.getItem(LOCAL_STORAGE_ID);

  return localStorageState ? JSON.parse(localStorageState) : defaultStateSheets;
}

export const useSheetsStore = defineStore("sheets", {
  state: () => {
    return { sheets: getInitialState() };
  },

  getters: {
    getSheet: (state) => {
      return (sheetId) => state.sheets.find((s) => s.id === sheetId);
    },
  },

  actions: {
    addSheet(newSheet) {
      this.sheets.push(newSheet);

      localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(this.sheets));
    },

    addSheetNote(sheetId, note) {
      this.getSheet(sheetId).notes.push(note);

      localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(this.sheets));
    },

    deleteSheetNote(sheetId, index) {
      const sheet = this.getSheet(sheetId);
      sheet.notes = sheet.notes.filter((_, i) => i !== index);

      localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(this.sheets));
    },

    updateNoteName(sheetId, index, direction) {
      const sheet = this.getSheet(sheetId);

      if (index === null || index === undefined) return;

      const noteIndexInOrder = NOTES_ORDER.indexOf(sheet.notes[index].name);

      if (direction === "up") {
        sheet.notes[index].name =
          NOTES_ORDER[noteIndexInOrder - 1] ?? NOTES_ORDER.at(-1);
      }

      if (direction === "down") {
        sheet.notes[index].name =
          NOTES_ORDER[noteIndexInOrder + 1] ?? NOTES_ORDER.at(0);
      }

      localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(this.sheets));
    },

    updateNoteValue(sheetId, index) {
      const sheet = this.getSheet(sheetId);

      sheet.notes[index].value =
        sheet.notes[index].value === NOTES_VALUE.at(-1)
          ? NOTES_VALUE[0]
          : NOTES_VALUE[NOTES_VALUE.indexOf(sheet.notes[index].value) + 1];

      localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(this.sheets));
    },
  },
});
