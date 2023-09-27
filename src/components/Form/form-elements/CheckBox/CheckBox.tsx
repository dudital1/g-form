import { Controller } from "react-hook-form";
import styled from "styled-components";
import { FormElementProps } from "../types";

const StyledCheckBoxInput = styled.input`
  &:checked {
    accent-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CheckBox: React.FC<FormElementProps> = ({
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
            render={({ field }) => {
              const fieldValues = field.value ?? [];
              return (
                <>
                  <StyledCheckBoxInput
                    type="checkbox"
                    id={`${inputConfig.name}-${option.value}`}
                    checked={fieldValues.includes(option.value)}
                    onChange={(e) => {
                      const newValues = e.target.checked
                        ? [...fieldValues, option.value]
                        : fieldValues.filter(
                            (value: string) => value !== option.value
                          );
                      field.onChange(newValues);
                    }}
                    value={option.value}
                  />
                  <label htmlFor={`${inputConfig.name}-${option.value}`}>
                    {option.label}
                  </label>
                </>
              );
            }}
          />
        </div>
      ))}
    </>
  );
};
