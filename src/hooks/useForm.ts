import { useState } from 'react';
import { sanitizeNumber } from '../utils.ts';

export interface Rule<T> {
  eventType: ('change' | 'blur')[];
  validate: (inputValue: string, index?: number) => boolean;
  errorStatus: T;
}

export type Rules<T, E> = Record<keyof T, Rule<E>[]>;
type Errors<T, E> = Record<keyof T, E | E[]>;

const isKeyofValue = <T extends object>(values: T, field: string): field is Extract<keyof T, string> => {
  return field in values;
};

export const useForm = <T extends object, E>(initialValues: T, rules: Rules<T, E>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors<T, E>>(() => {
    const initialErrors = {} as Errors<T, E>;

    for (const key of Object.keys(initialValues) as Array<keyof T>) {
      const value = initialValues[key];

      initialErrors[key] = (Array.isArray(value) ? value.map(() => null) : null) as Errors<T, E>[typeof key];
    }

    return initialErrors;
  });

  const isFormValid = Object.values(errors).every((error) => {
    if (Array.isArray(error)) {
      return error.every((e) => !e);
    } else {
      return !error;
    }
  });

  const setListValue = (field: keyof T, value: string, index: number) => {
    const fieldValue = values[field];
    if (!Array.isArray(fieldValue)) {
      return;
    }

    setValues((prev) => {
      const updatedFieldValue = [...fieldValue];
      updatedFieldValue[index] = value;
      return { ...prev, [field]: updatedFieldValue };
    });
  };

  const setListError = (field: keyof T, errorStatus: E, index: number) => {
    const fieldError = errors[field];
    if (!Array.isArray(fieldError)) {
      return;
    }

    setErrors((prev) => {
      const updatedFieldError = [...fieldError];
      updatedFieldError[index] = errorStatus;
      return { ...prev, [field]: updatedFieldError };
    });
  };

  // TODO: change/blur 사실상 중복되는 로직 추출
  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const field = e.target.name;
    if (!isKeyofValue(initialValues, field)) {
      return;
    }

    const inputValue = e.target.value;

    const changeRules = rules[field].filter((rule) => rule.eventType.includes('change'));

    if (e.target instanceof HTMLInputElement && Array.isArray(values[field])) {
      const fieldset = e.target.closest('fieldset');
      const inputs = fieldset.querySelectorAll('input');
      const index = Array.from(inputs).indexOf(e.target);

      const activeRule = changeRules.find((rule) => rule.validate(inputValue, index));
      const errorStatus = activeRule?.errorStatus ?? null;

      setListError(field, errorStatus, index);

      // TODO: sanitize 로직 더 잘 쓸 방법 고민
      let newValue = inputValue;
      if (e.target.inputMode === 'numeric') {
        newValue = sanitizeNumber(inputValue);
      }
      setListValue(field, newValue, index);
    } else {
      const activeRule = changeRules.find((rule) => rule.validate(inputValue));
      const errorStatus = activeRule?.errorStatus ?? null;

      setErrors((prev) => ({
        ...prev,
        [field]: errorStatus,
      }));

      // 중복
      let newValue = inputValue;
      if (e.target.inputMode === 'numeric') {
        newValue = sanitizeNumber(inputValue);
      }
      setValues((prev) => ({ ...prev, [field]: newValue }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    const field = e.target.name;
    if (!isKeyofValue(initialValues, field)) {
      return;
    }

    const inputValue = e.target.value;

    const blurRules = rules[field].filter((rule) => rule.eventType.includes('blur'));
    const activeRule = blurRules.find((rule) => rule.validate(inputValue));
    const errorStatus = activeRule?.errorStatus ?? null;

    if (!errorStatus) return;

    if (e.target instanceof HTMLInputElement && Array.isArray(values[field])) {
      const fieldset = e.target.closest('fieldset');
      const inputs = fieldset.querySelectorAll('input');
      const index = Array.from(inputs).indexOf(e.target);
      setListError(field, errorStatus, index);
    } else {
      setErrors((prev) => ({
        ...prev,
        [field]: errorStatus,
      }));
    }
  };

  return { values, errors, isFormValid, handleChange, handleBlur };
};
