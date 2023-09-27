import { useMemo } from "react";
import { BREAKPOINTS } from "./breakpoints";
import { useIsMobile } from "../../hooks/useIsMobile";
import { BUTTON_SIZE } from "../Button/Button.types";

export const colors = {
  primary: "#FCF6F5",
  secondary: "#990011",
  textPrimary: "#201E20",
  textSecondary: "#FFF",
  disabledBG: "#CCCCD5",
  greyWolf: "#696969",
  error: "#C73E1D",
  grey: "#ccc",
};

export const theme = {
  colors,
  components: {
    button: {
      padding: {
        [BUTTON_SIZE.M]: "8px 16px",
        [BUTTON_SIZE.S]: "4px 12px",
      },
    },
  },
  breakpoints: {
    values: BREAKPOINTS,
    up: (breakpoint: BREAKPOINTS) => `@media (min-width:${breakpoint}px)`,
    down: (breakpoint: BREAKPOINTS) => `@media (max-width:${breakpoint}px)`,
    between: (start: BREAKPOINTS, end: BREAKPOINTS) =>
      `@media (min-width:${start}px) and (max-width:${end}px)`,
    isMobile: false,
  },
};

export const useThemeInitialize = () => {
  const isMobile = useIsMobile();
  return useMemo(
    () => ({ ...theme, breakpoints: { ...theme.breakpoints, isMobile } }),
    [isMobile]
  );
};
