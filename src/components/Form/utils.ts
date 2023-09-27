import { z } from "zod";
import { Input } from "./types";

export const generateZodSchemaFromInputs = (inputs: Input[]) => {
  const zObject = z.object(
    inputs.reduce((acc, obj) => {
      acc[obj.name] = obj.validation;
      return acc;
    }, {} as { [key: string]: z.ZodTypeAny })
  );
  console.log(zObject);

  return zObject;
};
