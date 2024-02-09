const testSheet = {
  name: "Test",
  author: "John Doe",
  timeSignature: [3, 4],
  notes: [
    { name: "mi", value: "eighth" },
    { name: "mi", value: "sixteenth" },
    { rest: true, value: "eighth" },
    { name: "si", value: "sixteenth" },
    { name: "si", value: "eighth" },
    { rest: true, value: "quarter" },
    { name: "do", value: "eighth" },
    { rest: true, value: "half" },
    { rest: true, value: "whole" },
    { name: "sol", value: "eighth" },
    { name: "sol", value: "eighth" },
    { name: "sol", value: "eighth" },
    { name: "sol", value: "eighth" },
    { name: "la", value: "eighth" },
    { name: "la", value: "eighth" },
    { name: "la", value: "eighth" },
    { name: "sol", value: "quarter" },
    { name: "la", value: "quarter" },
    { name: "si", value: "quarter" },
  ],
};

export default [
  ...(import.meta.env.MODE === "development" ? [testSheet] : []),
  {
    name: "La rumeur",
    author: "Manau",
    timeSignature: [4, 4],
    notes: [
      { name: "mi", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "si", value: "quarter", dotted: true },
      { name: "si", value: "eighth" },
      { name: "la", value: "quarter" },
      { name: "do'", value: "quarter" },
      { name: "si", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "sol", value: "quarter", dotted: true },
      { name: "la", value: "quarter" },
    ],
  },
  {
    name: "Ensemble",
    author: "Jean-Jacques Goldman",
    timeSignature: [4, 4],
    notes: [
      { name: "re", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "re", value: "half" },
      { name: "fa", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "do", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "si", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "mi", value: "quarter" },
    ],
  },
  {
    name: "Baby Shark",
    author: "Min Seok Kim",
    timeSignature: [4, 4],
    notes: [
      { name: "do", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "do", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "do", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "fa", value: "quarter" },
      { name: "mi", value: "quarter" },
    ],
  },
  {
    name: "Joyeux anniversaire",
    author: "Robert Coleman",
    timeSignature: [3, 4],
    notes: [
      { name: "re", value: "quarter", dotted: true },
      { name: "re", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "fa#", value: "half" },
      { name: "re", value: "quarter", dotted: true },
      { name: "re", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "sol", value: "half" },
      { name: "re", value: "quarter", dotted: true },
      { name: "re", value: "quarter" },
      { name: "re'", value: "quarter" },
      { name: "si", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "fa#", value: "quarter" },
      { name: "mi", value: "half" },
      { name: "mi", value: "quarter" },
      { name: "do'", value: "quarter", dotted: true },
      { name: "do'", value: "quarter" },
      { name: "si", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "sol", value: "half", dotted: true },
    ],
  },
  {
    name: "Concerning hobbits",
    author: "Howard Shore",
    timeSignature: [2, 4],
    notes: [
      { name: "do", value: "sixteenth" },
      { name: "re", value: "sixteenth" },
      { name: "mi", value: "quarter" },
      { name: "sol", value: "eighth" },
      { name: "sol", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "do", value: "half" },
      { name: "mi", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "la", value: "quarter", dotted: true },
      { name: "do'", value: "quarter" },
      { name: "si", value: "quarter", dotted: true },
      { name: "sol", value: "quarter" },
      { name: "mi", value: "quarter", dotted: true },
      { name: "fa", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "re", value: "quarter", dotted: true },
      { name: "do", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "do", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "do", value: "half" },
      { name: "mi", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "la", value: "half" },
      { name: "sol", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "mi", value: "half" },
      { name: "re", value: "half" },
      { name: "do", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "do", value: "quarter", dotted: true },
      { name: "do", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "mi", value: "quarter", dotted: true },
      { name: "mi", value: "quarter" },
      { name: "mi", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "do", value: "quarter" },
      { name: "re", value: "quarter" },
      { name: "sol", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "si", value: "quarter" },
      { name: "si", value: "quarter" },
      { name: "do'", value: "quarter" },
      { name: "la", value: "quarter" },
      { name: "mi", value: "quarter", dotted: true },
      { name: "sol", value: "quarter" },
      { name: "re", value: "quarter" },
    ],
  },
];
