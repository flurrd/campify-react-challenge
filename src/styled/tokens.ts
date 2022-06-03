import { DefaultTheme } from "styled-components";
import type { ThemeBreakpoints } from "./breakpoints";
import type { ThemeColors } from "./colors";
import type { ThemeSpacings } from "./spacings";

const get = (obj: any, path: any, defaultValue = undefined) => {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      );
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};

type Path<T extends string> = T extends "" ? "" : `.${T}`;

type PathsOf<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${Path<PathsOf<T[K]>>}`;
      }[Exclude<keyof T, symbol>]
    : ""
) extends infer D
  ? Extract<D, string>
  : never;

type TokenKeys<T> = PathsOf<T>;

interface TokenProps {
  theme: DefaultTheme;
}

const tokens = (key: TokenKeys<DefaultTheme>) => (props: TokenProps) =>
  get(props.theme, key);
const colors = (key: TokenKeys<ThemeColors>) => (props: TokenProps) =>
  get(props.theme.colors, key);
const spacings = (key: TokenKeys<ThemeSpacings>) => (props: TokenProps) =>
  get(props.theme.spacings, key);
const breakpoints = (key: TokenKeys<ThemeBreakpoints>) => (props: TokenProps) =>
  get(props.theme.breakpoints, key);

export { tokens, colors, spacings, breakpoints };
