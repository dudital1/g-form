import { Controller } from "react-hook-form";
import { FormElementProps } from "../types";
import styled from "styled-components";

const StyledRadioInput = styled.input`
  &:checked {
    accent-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const RadioInput: React.FC<FormElementProps> = ({
  control,
  inputConfig,
}) => {
  return (
    <>
      {inputConfig.options?.map((option) => (
        <div key={option.value}>
          <Controller
            control={control}
            name={inputConfig.name}
            render={({ field }) => (
              <>
                <StyledRadioInput
                  type="radio"
                  id={`${inputConfig.name}-${option.value}`}
                  checked={field.value === option.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  value={option.value}
                />
                <label htmlFor={`${inputConfig.name}-${option.value}`}>
                  {option.label}
                </label>
              </>
            )}
          />
        </div>
      ))}
    </>
  );
};
