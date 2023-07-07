import styled from "styled-components";
import {flexbox, FlexboxProps, space, SpaceProps, layout, LayoutProps, position, PositionProps, color, ColorProps} from "styled-system";

export interface CustomFlexProps extends FlexboxProps, SpaceProps, LayoutProps, PositionProps, ColorProps {
  gap?: number;
}

export const Flex = styled.div<CustomFlexProps>`
  display: flex;
  ${flexbox};
  ${space};
  ${layout};
  ${position};
  ${color};
  ${({ gap }) => (gap ? `gap: ${gap}px` : "")};
`;

export const FlexColumn = styled(Flex).attrs({ flexDirection: "column" })``;