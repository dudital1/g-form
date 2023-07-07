import { Control } from "react-hook-form";
import { Input } from "../types";

export type FormElementProps = {
  inputConfig: Input;
  control: Control<any, any>;
};
