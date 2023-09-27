import { Input, InputTypes } from "./types";
import { z } from "zod";

export const mockFormInputs: Input[] = [
  {
    name: "name",
    label: "Name",
    validation: z.string().nonempty("Name is required"),
    type: InputTypes.Text,
  },
  {
    name: "email",
    label: "Email",
    validation: z.string().email("Invalid email").nonempty("Email is required"),
    type: InputTypes.Email,
  },
  {
    name: "password",
    label: "Password",
    validation: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .nonempty("Password is required"),
    type: InputTypes.Password,
  },
  {
    name: "lastName",
    label: "Last Name",
    validation: z.string().nonempty("Name is required"),
    type: InputTypes.Text,
  },
  {
    name: "work",
    label: "Work",
    validation: z
      .string()
      .min(3, "Work must contain at least 3 character(s)")
      .nonempty("Name is required"),
    type: InputTypes.Text,
  },
  {
    name: "gender",
    label: "Gender",
    type: InputTypes.Radio,
    validation: z.enum(["male", "female", "other"]),
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
    ],
  },
  {
    name: "hobbies",
    label: "Hobbies",
    type: InputTypes.Checkbox,
    validation: z
      .array(z.string())
      .min(1, "Select at least one hobby")
      .nonempty("Hobbies are required"),
    options: [
      { label: "Reading", value: "reading" },
      { label: "Gaming", value: "gaming" },
      { label: "Sports", value: "sports" },
    ],
  },
];
