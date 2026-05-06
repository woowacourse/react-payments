import type { ReactNode } from 'react';

import { isRequired, isNumericString, isValidMonth, length, minLength, maxLength } from '../utils/validator';

export type FormValuesRules<TFormValues extends Record<string, unknown>> = {
  [FormKey in keyof TFormValues]: Rule[];
};

type RuleType = 'isRequired' | 'isNumericString' | 'isValidMonth' | 'length' | 'minLength' | 'maxLength';

export type Rule = {
  type: RuleType;
  message: ReactNode;
} & {
  [optionKey in RuleType]?: number;
};
export interface ResultValid extends Rule {
  valid: boolean;
}

type Validators = {
  [type in RuleType]: (value: unknown, payload?: number) => boolean;
};

const validators: Validators = {
  isRequired,
  isNumericString,
  isValidMonth,
  length,
  minLength,
  maxLength,
};

const validateFormValueRules = <T>(value: T, rules: Rule[]) => {
  return rules.map((rule) => {
    const validator = validators[rule.type];
    if (!validator) return { valid: true };
    return { ...rule, valid: validator(value, rule[rule.type]) };
  });
};

export const validateFormValuesRules = <TFormValues extends Record<string, unknown>>(
  formValues: TFormValues,
  formValuesRules: FormValuesRules<TFormValues>,
) => {
  return Object.entries(formValues).reduce((acc, [key, value]: [string, unknown]) => {
    const rules = formValuesRules[key];
    const valid = validateFormValueRules(value, rules);
    return { ...acc, [key]: valid };
  }, {}) as {
    [key in keyof TFormValues]: ResultValid[];
  };
};
