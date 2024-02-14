import React, { useState } from "react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";

const schema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      minLength: 3,
      description: "Please enter your first name",
    },
    secondName: {
      type: "string",
      minLength: 3,
      description: "Please enter your second name",
    },
    vegetarian: {
      type: "boolean",
    },
    birthDate: {
      type: "string",
      format: "date",
      description: "Please enter your birth date.",
    },
    nationality: {
      type: "string",
      enum: ["DE", "IT", "JP", "US", "RU", "Other"],
    },
    dropDown: {
      type: "string",
      enum: ["Single", "Married", "Divorced", "Widowed"],
    },
    spouse: {
      type: "string",
      enum: ["Sad", "Happy", "Devastated", "Crying"],
    },
    spouseSingle: {
      type: "string",
      enum: ["Sad", "Happy", "Devastated", "Crying"],
    },
    spouseMarried: {
      type: "string",
      enum: ["Lucky", "Happy", "Happy Tears"],
    },
    spouseDivorced: {
      type: "string",
      enum: ["Sad", "Happy", "Devastated", "Crying"],
    },
    provideAddress: {
      type: "boolean",
    },
    address: {
      type: "object",
      properties: {
        street: {
          type: "string",
        },
        streetNumber: {
          type: "string",
        },
        city: {
          type: "string",
        },
        postalCode: {
          type: "string",
          maxLength: 5,
        },
      },
    },
    vegetarianOptions: {
      type: "object",
      properties: {
        vegan: {
          type: "boolean",
        },
        favoriteVegetable: {
          type: "string",
          enum: ["Tomato", "Potato", "Salad", "Aubergine", "Cucumber", "Other"],
        },
        otherFavoriteVegetable: {
          type: "string",
        },
      },
    },
  },
};

const uischema = {
  type: "Categorization",
  elements: [
    {
      type: "Category",
      label: "Name",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/firstName",
            },
            {
              type: "Control",
              scope: "#/properties/secondName",
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/birthDate",
            },
            {
              type: "Control",
              scope: "#/properties/nationality",
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/dropDown",
            },
            {
              "type": "Control",
              "scope": "#/properties/spouseMarried",
              "rule": {
                "effect": "SHOW",
                "condition": {
                  "type": "LEAF",
                  "scope": "#/properties/dropDown",
                  "expectedValue": "Married"
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/spouseSingle",
              "rule": {
                "effect": "SHOW",
                "condition": {
                  "type": "LEAF",
                  "scope": "#/properties/dropDown",
                  "expectedValue": "Single"
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/spouseDivorced",
              "rule": {
                "effect": "SHOW",
                "condition": {
                  "type": "LEAF",
                  "scope": "#/properties/dropDown",
                  "expectedValue": "Divorced"
                }
              }
            },
          ],
        },
        {
          type: "Control",
          scope: "#/properties/provideAddress",
        },
        {
          type: "Control",
          scope: "#/properties/vegetarian",
        },
      ],
    },
    {
      type: "Category",
      label: "Address",
      i18n: "address",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/address/properties/street",
            },
            {
              type: "Control",
              scope: "#/properties/address/properties/streetNumber",
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/address/properties/city",
            },
            {
              type: "Control",
              scope: "#/properties/address/properties/postalCode",
            },
          ],
        },
      ],
      rule: {
        effect: "SHOW",
        condition: {
          scope: "#/properties/provideAddress",
          schema: {
            const: true,
          },
        },
      },
    },
    {
      type: "Category",
      label: "Additional",
      elements: [
        {
          type: "Control",
          scope: "#/properties/vegetarianOptions/properties/vegan",
        },
        {
          type: "Control",
          scope: "#/properties/vegetarianOptions/properties/favoriteVegetable",
        },
        {
          type: "Control",
          scope:
            "#/properties/vegetarianOptions/properties/otherFavoriteVegetable",
          rule: {
            effect: "SHOW",
            condition: {
              scope:
                "#/properties/vegetarianOptions/properties/favoriteVegetable",
              schema: {
                const: "Other",
              },
            },
          },
        },
      ],
      rule: {
        effect: "SHOW",
        condition: {
          scope: "#/properties/vegetarian",
          schema: {
            const: true,
          },
        },
      },
    },
  ],
  options: {
    variant: "stepper",
    showNavButtons: true,
  },
};

const initialData = {
  provideAddress: true,
  vegetarian: false,
};

const JsonForm = () => {
  const [data, setData] = useState(initialData);
  return (
    <div className="w-96">
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </div>
  );
};

export default JsonForm;
