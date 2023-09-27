import React from "react";
import { ThemeProvider } from "styled-components";
import { useThemeInitialize } from "./theme";

type StyledComponentsThemeProviderProps = {
  children: React.ReactNode;
};
export const StyledComponentsThemeProvider: React.FC<
  StyledComponentsThemeProviderProps
> = ({ children }) => {
  const theme = useThemeInitialize();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
