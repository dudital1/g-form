import styled from "styled-components";

export interface CustomFlexProps {
  gap?: number;
}

export const Flex = styled.div<CustomFlexProps>`
  display: flex;
  ${({ gap }) => (gap ? `gap: ${gap}px` : "")};
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;