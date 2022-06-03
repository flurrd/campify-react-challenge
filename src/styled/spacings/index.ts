export const SPACINGS = {
  10: "175px",
  9: "138px",
  8: "108px",
  7: "85px",
  6: "67px",
  5: "53px",
  4: "42px",
  3: "33px",
  2: "25px",
  1: "20px",
  BASE: "16px",
  _1: "13px",
  _2: "10px",
  _3: "8px",
  _4: "5px",
  _5: "2px",
} as const;

export type ThemeSpacings = typeof SPACINGS;
