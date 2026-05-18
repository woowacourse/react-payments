import type { ReactNode } from 'react';

import {
  isRequired,
  isNumericString,
  isValidMonth,
  length,
  minLength,
  maxLength,
  rangeLength,
} from '../utils/validator';

type RuleType =
  | 'isRequired'
  | 'isNumericString'
  | 'isValidMonth'
  | 'length'
  | 'minLength'
  | 'maxLength'
  | 'rangeLength';

type Validators = {
  [type in RuleType]: (value: unknown, options?: any) => boolean;
};

const validators: Validators = {
  isRequired,
  isNumericString,
  isValidMonth,
  length,
  minLength,
  maxLength,
  rangeLength,
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
  options?: unknown;
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
    return { ...rule, valid: validator(value, rule.options || {}) };
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
