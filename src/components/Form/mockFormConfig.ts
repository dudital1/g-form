import { Input } from "./types";
import { z } from "zod";

export const mockFormInputs: Input[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
  },
  {
    name: "gender",
    label: "Gender",
    type: "radio",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
    ],
  },
  {
    name: "hobbies",
    label: "Hobbies",
    type: "checkbox",
    options: [
      { label: "Reading", value: "reading" },
      { label: "Gaming", value: "gaming" },
      { label: "Sports", value: "sports" },
    ],
  },
];

export const mockSchema = z.object({
  name: z.string().nonempty("Name is required"),
  lastName: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
  gender: z.enum(["male", "female", "other"]),
  hobbies: z
    .array(z.string())
    .min(1, "Select at least one hobby")
    .nonempty("Hobbies are required"),
});
