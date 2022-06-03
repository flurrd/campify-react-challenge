export const COLORS = {
  BRAND: {
    PRIMARY: {
      DARK: "#004F92",
      MEDIUM: "#297AC3",
      LIGHT: "#27A1EE",
      LIGHTEST: "#C2E1F6",
    },
    SECONDARY: {
      DARK: "#06605B",
      MEDIUM: "#3AC4BB",
      LIGHT: "#6EDBD4",
    },
    COMPLEMENTARY: {
      PRIMARY: "#F9F1AD",
      DARK: "#FFE87D",
    },
  },
  ACTION: {
    PRIMARY: "#F85A40",
    DARK: "#EB2909",
  },
  ALERT: {
    DANGER: "#F32C0B",
    WARNING: "#FFBB00",
    SUCCESS: "#03B15D",
  },
  SECONDARY: {
    LIGHT: "#297AC3",
    DARK: "#004F92",
  },
  GREY: {
    DARK: "#1E3440",
    MEDIUM: "#678799",
    LIGHT: "#A6B8C1",
    LIGHTER: "#CDDBE2",
    LIGHTEST: "#F2F5F8",
  },
  WHITE: "#FFFFFF",
  TEXT: "#1E3440",
  FACEBOOK: {
    PRIMARY: "#3B5998",
    DARK: "#283C67",
  },
} as const;

export type ThemeColors = typeof COLORS;
