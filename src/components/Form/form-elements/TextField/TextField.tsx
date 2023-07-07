import { Controller } from "react-hook-form";
import { FormElementProps } from "../types";
import { TextInput } from "./TextField.styled";

export const TextField: React.FC<FormElementProps> = ({
  control,
  inputConfig,
}) => {
  return (
    <Controller
      control={control}
      name={inputConfig.name}
      defaultValue=""
      render={({ field }) => (
        <TextInput
          placeholder={inputConfig.label}
          type={inputConfig.type}
          id={inputConfig.name}
          {...field}
        />
      )}
    />
  );
};
