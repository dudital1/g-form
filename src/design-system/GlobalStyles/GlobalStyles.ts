import { createGlobalStyle } from "styled-components";
import { colors } from "../StyledComponentsThemeProvider /theme";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0 0;
        padding: 0 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        height: calc(var(--vh, 1vh) * 100);
        overflow: hidden;
        background-color: ${colors.primary}}
    }
`;
