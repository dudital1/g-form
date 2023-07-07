import { Controller } from "react-hook-form";
import { FormElementProps } from "../types";
import { RadioInput } from "./RadioInput";

export const RadioInputFroup: React.FC<FormElementProps> = ({
  control,
  inputConfig,
}) => {
  return (
    <Controller
      control={control}
      name={inputConfig.name}
      render={({ field }) => (
        <RadioInput inputConfig={inputConfig} control={control} />
      )}
    />
  );
};
