import { isRequired, isNumericString, isValidMonth, min } from '../utils/validator';

type FormValuesRules<TFormValues extends Record<string, string>> = {
  [FormKey in keyof TFormValues]: Rule[];
};

interface Rule {
  type: string;
}
interface ResultValid extends Rule {
  valid: boolean;
}

const validateFormValueRules = <T extends string>(value: T, rules: Rule[]) => {
  return rules.map((rule) => {
    switch (rule.type) {
      case 'isRequired':
        return { ...rule, valid: isRequired(value) };
      case 'isNumericString':
        return { ...rule, valid: isNumericString(value) };
      case 'isValidMonth':
        return { ...rule, valid: isValidMonth(value) };
      case 'min':
        return { ...rule, valid: min(value, 3) };
      default:
        return { valid: true };
    }
  });
};

export const validateFormValuesRules = <TFormValues extends Record<string, string>>(
  formValues: TFormValues,
  formValuesRules: FormValuesRules<TFormValues>,
) => {
  return Object.entries(formValues).reduce((acc, [key, value]: [string, string]) => {
    const rules = formValuesRules[key];
    const valid = validateFormValueRules(value, rules);
    return { ...acc, [key]: valid };
  }, {}) as {
    [key in keyof TFormValues]: ResultValid[];
  };
};
