import { isRequired, isNumericString, isValidMonth, min } from '../utils/validator';

type FormValuesRules<TFormValues extends Record<string, string>> = {
  [FormKey in keyof TFormValues]: Rule[];
};

interface Rule {
  type: string;
}

const validateFormValueRules = <T extends string>(value: T, rules: Rule[]) => {
  return rules.map((rule) => {
    switch (rule.type) {
      case 'isRequired':
        return isRequired(value) ? true : rule;
      case 'isNumericString':
        return isNumericString(value) ? true : rule;
      case 'isValidMonth':
        return isValidMonth(value) ? true : rule;
      case 'min':
        return min(value, 3) ? true : rule;
      default:
        return true;
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
    [key in keyof TFormValues]: (true | Rule)[];
  };
};
