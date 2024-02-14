import { UiSchema } from "@rjsf/utils";

export const uiSchema: UiSchema = {
  firstName: {
    "ui:autofocus": true,
    "ui:emptyValue": "",
  },
  age: {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "(earthian year)",
  },
  bio: {
    "ui:widget": "textarea",
  },
  password: {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!",
  },
  date: {
    "ui:widget": "alt-datetime",
  },
  telephone: {
    "ui:options": {
      inputType: "tel",
    },
  },
  "ui:submitButtonOptions": {
    props: {
      disabled: false,
      className: "inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
    },
    norender: false,
    submitText: "Submit",
  },
};
