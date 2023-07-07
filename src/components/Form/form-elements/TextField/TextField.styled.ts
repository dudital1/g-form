import styled from "styled-components";

export const TextInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:focus {
    outline: none;
    border-color: #fa6400;
    box-shadow: 0 0 0 3px rgba(250, 100, 0, 0.1);
  }
`;
