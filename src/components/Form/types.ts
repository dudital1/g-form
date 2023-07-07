type InputsOptions = {
  label: string;
  value: string;
};

export type Input = {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "radio" | "checkbox";
  options?: InputsOptions[];
};
