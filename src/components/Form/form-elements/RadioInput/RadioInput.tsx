import { Controller } from "react-hook-form";
import { FormElementProps } from "../types";

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
                <input
                  type="radio"
                  id={`${inputConfig.name}-${option.value}`}
                  checked={field.value === option.value} // Use checked attribute
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
