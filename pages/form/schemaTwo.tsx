import { RJSFSchema } from "@rjsf/utils";

export const schemaTwo: RJSFSchema = {
  title: "Complex Form",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    firstName: {
      type: "string",
      title: "First name",
      minLength: 3,
    },
    lastName: {
      type: "string",
      title: "Last name",
    },
    age: {
      type: "integer",
      title: "Age",
      minimum: 18,
    },
    date: {
      type: "string",
      format: "date",
      title: "Date",
    },
    bio: {
      type: "string",
      title: "Bio",
    },
    password: {
      type: "string",
      title: "Password",
      minLength: 8,
    },
    telephone: {
      type: "string",
      title: "Telephone",
      minLength: 10,
      maxLength: 10,
    },
  },
};
