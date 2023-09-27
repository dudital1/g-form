import { ZodString, ZodEnum, ZodArray } from "zod";

type InputsOptions = {
  label: string;
  value: string;
};

export enum InputTypes {
  Text = "text",
  Email = "email",
  Password = "password",
  Radio = "Radio",
  Checkbox = "checkbox",
}

export type Input = {
  name: string;
  label: string;
  type: InputTypes;
  validation: ZodString | ZodEnum<any> | ZodArray<ZodString, "atleastone">;
  options?: InputsOptions[];
};
