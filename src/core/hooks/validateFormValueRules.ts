import type { ReactNode } from 'react';

import { isRequired, isNumericString, isValidMonth, length, minLength, maxLength } from '../utils/validator';

type RuleType = 'isRequired' | 'isNumericString' | 'isValidMonth' | 'length' | 'minLength' | 'maxLength';

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

type ValidatorRule = {
  type: RuleType;
  message: ReactNode;
};
type CustomRule = {
  type: 'custom';
  message: ReactNode;
  validate: (value: unknown) => boolean;
};

export type Rule = (ValidatorRule | CustomRule) & {
  [optionKey in RuleType]?: number;
};

export type FormValuesRules<TFormValues extends Record<string, unknown>> = {
  [FormKey in keyof TFormValues]: Rule[];
};

export type ResultValid = Rule & {
  valid: boolean;
};

const validateFormValueRules = <T>(value: T, rules: Rule[]) => {
  return rules.map((rule) => {
    if (rule.type === 'custom') return { ...rule, valid: rule.validate(value) };
    const validator = validators[rule.type as RuleType];
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
