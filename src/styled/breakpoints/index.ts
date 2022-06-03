export const BREAKPOINTS = {
  XXS: "360px",
  XS: "425px",
  SM: "768px",
  MD: "900px",
  LG: "1200px",
  XL: "1300px",
  XXL: "1600px",
} as const;

export type ThemeBreakpoints = typeof BREAKPOINTS;
