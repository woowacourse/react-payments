import { isRequired, isNumericString, isValidMonth, min } from '../utils/validator';

type FormValuesRules<TFormValues extends Record<string, string>> = {
  [FormKey in keyof TFormValues]: Rule[];
};

interface Rule {
  type: string;
}

const validateFormValueRules = <T extends string>(value: T, rules: Rule[]) => {
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
};

export const validateFormValuesRules = <TFormValues extends Record<string, string>>(
  formValues: TFormValues,
  formValuesRules: FormValuesRules<TFormValues>,
) => {
  return Object.entries(formValues).every(([key, value]: [string, string]) => {
    const rules = formValuesRules[key];
    return validateFormValueRules(value, rules);
  });
};
