export const BASE_VALUE = 1;

// Based on https://fr.wikipedia.org/wiki/Mesure_(musique)#Chiffrages
export const TIME_UNIT = {
  whole: 1,
  half: 2,
  quarter: 4,
  eighth: 8,
};

// Based on https://en.wikipedia.org/wiki/Note_value
export const NOTES_VALUES = {
  whole: BASE_VALUE,
  half: BASE_VALUE / 2,
  quarter: BASE_VALUE / 4,
  eighth: BASE_VALUE / 8,
  sixteenth: BASE_VALUE / 16,
};

// Based on https://en.wikipedia.org/wiki/Rest_(music)
export const REST_VALUES = {
  whole: BASE_VALUE,
  half: BASE_VALUE / 2,
  quarter: BASE_VALUE / 4,
  eighth: BASE_VALUE / 8,
  sixteenth: BASE_VALUE / 16,
};
