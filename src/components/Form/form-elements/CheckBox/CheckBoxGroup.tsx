import { Controller } from "react-hook-form";
import { FormElementProps } from "../types";
import { CheckBox } from "./CheckBox";

export const CheckBoxGroup: React.FC<FormElementProps> = ({
  control,
  inputConfig,
}) => {
  return (
    <Controller
      control={control}
      name={inputConfig.name}
      render={({ field }) => (
        <CheckBox inputConfig={inputConfig} control={control} />
      )}
    />
  );
};
