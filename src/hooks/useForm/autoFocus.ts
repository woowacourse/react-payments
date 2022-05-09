import { Field } from './types';

const getSideFields = (currentFieldName: string, fields: Map<string, Field>) => {
  const inputs = [...fields.entries()];
  const sideFields: [Field | null, Field | null] = [null, null];
  for (let i = 0; i < inputs.length; i += 1) {
    const [name] = inputs[i];
    if (currentFieldName === name) {
      if (i < inputs.length - 1) {
        const [_, nextField] = inputs[i + 1];
        sideFields[1] = nextField;
      }
      if (i > 0) {
        const [_, prevField] = inputs[i - 1];
        sideFields[0] = prevField;
      }
      break;
    }
  }
  return sideFields;
};

export const nextFocus = (name: string, fields: Map<string, Field>) => {
  const [_, nextField] = getSideFields(name, fields);
  nextField && nextField._ref.focus();
};

export const prevFocus = (name: string, fields: Map<string, Field>) => {
  const [prevField, _] = getSideFields(name, fields);
  prevField && prevField._ref.focus();
};
