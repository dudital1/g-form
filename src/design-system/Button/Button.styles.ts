import styled from "styled-components";
import { BUTTON_SIZE, IButtonWrapperProps } from "./Button.types";
import { Flex } from "../Flex/Flex";

export const Wrapper = styled.button<IButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: ${({ $rounded }) => ($rounded ? 50 : 4)}px;
  padding: ${({ $size, theme }) => {
    return theme.components.button.padding[$size as BUTTON_SIZE];
  }};
  font-size: 13px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  }
  :disabled {
    background-color: ${({ theme }) => theme.colors.disabledBG};
    color: ${({ theme }) => theme.colors.greyWolf};
    cursor: auto;
  }
`;

export const IconWrapper = styled(Flex)`
  flex: 0;
  :empty {
    display: none;
  }
`;
