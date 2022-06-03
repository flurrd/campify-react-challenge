import { DefaultTheme } from "styled-components";
import type { ThemeBreakpoints } from "./breakpoints";
import { BREAKPOINTS } from "./breakpoints";
import type { ThemeColors } from "./colors";
import { COLORS } from "./colors";
import type { ThemeSpacings } from "./spacings";
import { SPACINGS } from "./spacings";

export type Theme = {
  colors: ThemeColors;
  spacings: ThemeSpacings;
  breakpoints: ThemeBreakpoints;
};

const theme: DefaultTheme = {
  colors: COLORS,
  spacings: SPACINGS,
  breakpoints: BREAKPOINTS,
};

export {
  COLORS,
  ThemeColors,
  SPACINGS,
  ThemeSpacings,
  BREAKPOINTS,
  ThemeBreakpoints,
  theme,
};
