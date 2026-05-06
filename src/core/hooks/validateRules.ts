import { isRequired, isNumericString, isValidMonth, min } from '../utils/validator';

interface FormValuesRules {
  [formKey: string]: Rule[];
}

interface Rule {
  type: string;
}

export const validateRules = <TFormValues extends Record<string, string>>(
  formValues: TFormValues,
  formValuesRules: FormValuesRules,
) => {
  return Object.entries(formValues).every(([key, value]: [string, string]) => {
    const rules = formValuesRules[key];
    return rules.every((rule) => {
      switch (rule.type) {
        case 'isRequired':
          return isRequired(value);
        case 'isNumericString':
          return isNumericString(value);
        case 'isValidMonth':
          return isValidMonth(value);
        case 'min':
          return min(value, 3);
        default:
          return true;
      }
    });
  });
};
