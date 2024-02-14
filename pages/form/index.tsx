import React from "react";
import Form from "@rjsf/mui";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { uiSchema } from "./uiSchema";
import { schemaTwo } from "./schemaTwo";
import ObjectFieldTemplate from "@/components/ObjectFieldTemplate";

const schema: RJSFSchema = {
  definitions: {
    newInput1: {
      title: "New Input 1",
      type: "object",
    },
  },
  properties: {
    "Section Object 1": {
      title: "Section 1",
      type: "object",
      properties: {
        "1.1": {
          title: "1.1",
          type: "string",
        },
        "1.2": {
          format: "date",
          title: "1.2",
          type: "string",
        },
      },
      dependencies: {
        "1.2": {
          oneOf: [
            {
              properties: {
                "1.2": {
                  enum: ["2024-01-01"],
                },
                "1.3": {
                  title: "1.3",
                  type: "string",
                },
              },
              required: [],
            },
          ],
        },
      },
      required: [],
    },
    "Section Object 2": {
      title: "Section 2",
      type: "object",
      properties: {
        newInput1: {
          title: "New Input 1",
          type: "string",
        },
        newInput2: {
          title: "New Input 2",
          type: "string",
        },
        newInput3: {
          title: "New Input 3",
          type: "string",
        },
      },
      dependencies: {},
      required: [],
    },
    "Section Object 3": {
      title: "Section 3",
      type: "object",
      properties: {
        newInput1: {
          format: "date-time",
          title: "New Input 1",
          type: "string",
        },
        newInput2: {
          title: "New Input 2",
          type: "string",
          enum: ["0", "1", "2", "3"],
        },
        newInput3: {
          $ref: "#/definitions/newInput1",
          title: "New Input 3",
          description: "",
        },
      },
      dependencies: {},
      required: [],
    },
  },
  dependencies: {},
  required: [],
  type: "object",
};

const UiSchema1: UiSchema = {
  "Section Object 1": {
    "1.1": {},
    "1.2": {},
    "1.3": {},
    "1.4": {},
    "ui:order": ["1.1", "1.2", "1.3", "1.4"], // Updated order
    "ui:ObjectFieldTemplate": ObjectFieldTemplate,
  },
  "Section Object 2": {
    "ui:order": ["newInput1", "newInput2", "newInput3"],
  },
  "Section Object 3": {
    newInput3: {
      "ui:column": "4",
    },
    "ui:order": ["newInput1", "newInput2", "newInput3"],
  },
  "Section Object 4": {
    // New section
    "4.1": {
      "ui:column": "1",
    },
    "ui:order": ["4.1"],
  },
  "ui:order": [
    "Section Object 1",
    "Section Object 2",
    "Section Object 3",
    "Section Object 4",
  ], // Updated order
  definitions: {
    newInput1: {
      "ui:column": "4",
    },
  },
};

const FormPage = () => {
  return (
    <>
      <div className="w-{1024px}">
        <Form schema={schema} uiSchema={UiSchema1} validator={validator} />
      </div>
      <div className="h-24"></div>
      <div className="w-96">
        <Form
          schema={schemaTwo}
          uiSchema={uiSchema}
          validator={validator}
          liveValidate
        />
      </div>
    </>
  );
};

export default FormPage;
