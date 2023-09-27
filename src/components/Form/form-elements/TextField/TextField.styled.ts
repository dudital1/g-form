import styled from "styled-components";

export const TextInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
