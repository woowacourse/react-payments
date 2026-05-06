import { useCallback, useMemo, useState, type ChangeEvent, type FocusEvent } from "react";
import type { CardFormState, ValidationRule } from "../types";

type TupleToErrors<T extends unknown[]> =
  T extends [unknown, ...infer Rest]
  ? [string | null, ...TupleToErrors<Rest>]
  : [];

type TupleToValidations<T extends unknown[]> =
  T extends [unknown, ...infer Rest]
  ? [ValidationRule[], ...TupleToValidations<Rest>]
  : [];

type ErrorState = {
  [K in keyof CardFormState]: CardFormState[K] extends unknown[]
  ? TupleToErrors<CardFormState[K]>
  : string | null;
};

type Validations = {
  [K in keyof CardFormState]: CardFormState[K] extends unknown[]
  ? TupleToValidations<CardFormState[K]>
  : ValidationRule[];
};

export default function useCardForm({ initialValues, validations }: { initialValues: CardFormState, validations: Validations }) {
  const [values, setValues] = useState<CardFormState>(initialValues);

  const [errors, setErrors] = useState<ErrorState>(Object.entries(initialValues).reduce((prev, field) => {
    const [fieldName, fieldValue] = field as [fieldName: keyof CardFormState, fieldValue: string | string[]];
    const isArrayField = Array.isArray(fieldValue);
    return { ...prev, [fieldName]: isArrayField ? Array.from({ length: fieldValue.length }).map(() => null) : null }
  }, {}) as ErrorState);

  const register = useCallback((fieldName: keyof CardFormState, option?: { index: number }) => {
    const isArrayField = typeof option?.index === 'number';

    return {
      value: isArrayField ? values[fieldName][option.index] : values[fieldName],
      onChange: isArrayField ?
        (event: ChangeEvent<HTMLInputElement>) => {
          const failedValidation = (validations[fieldName][option.index] as ValidationRule[]).find(
            (validation) =>
              event.target.value.length && validation.type === 'onChange' && !validation.validator(event.target.value),
          );

          if (failedValidation) {
            setErrors((prev) => {
              const newArray = [...prev[fieldName] as (string | null)[]];
              newArray.splice(option.index, 1, failedValidation.message);
              return { ...prev, [fieldName]: newArray }
            })
            return;
          }

          setValues((prev) => {
            const newArray = [...prev[fieldName]];
            newArray.splice(option.index, 1, event.target.value);
            return { ...prev, [fieldName]: newArray }
          })
          setErrors((prev) => {
            const newArray = [...prev[fieldName] as (string | null)[]];
            newArray.splice(option.index, 1, null);
            return { ...prev, [fieldName]: newArray }
          })
        }
        : (event: ChangeEvent<HTMLInputElement>) => {
          const failedValidation = (validations[fieldName] as ValidationRule[]).find(
            (validation) =>
              event.target.value.length && validation.type === 'onChange' && !validation.validator(event.target.value),
          );

          if (failedValidation) {
            setErrors((prev) => {
              return { ...prev, [fieldName]: failedValidation.message }
            })
            return;
          }

          setValues((prev) => ({ ...prev, [fieldName]: event.target.value }))
          setErrors((prev) => {
            return { ...prev, [fieldName]: null }
          })
        },
      onBlur: isArrayField ? (event: FocusEvent<HTMLInputElement>) => {
        const failedValidation = (validations[fieldName][option.index] as ValidationRule[]).find(
          (validation) =>
            event.target.value.length &&
            validation.type === 'onBlur' &&
            !validation.validator(event.target.value),
        );

        if (failedValidation) {
          setErrors((prev) => {
            const newArray = [...prev[fieldName] as (string | null)[]];
            newArray.splice(option.index, 1, failedValidation.message);
            return { ...prev, [fieldName]: newArray }
          })
          return;
        }

        setErrors((prev) => {
          const newArray = [...prev[fieldName] as (string | null)[]];
          newArray.splice(option.index, 1, null);
          return { ...prev, [fieldName]: newArray }
        })
      } : (event: FocusEvent<HTMLInputElement>) => {
        const failedValidation = (validations[fieldName] as ValidationRule[]).find(
          (validation) =>
            event.target.value.length &&
            validation.type === 'onBlur' &&
            !validation.validator(event.target.value),
        );

        if (failedValidation) {
          setErrors((prev) => {
            return { ...prev, [fieldName]: failedValidation.message }
          })
          return;
        }

        setErrors((prev) => {
          return { ...prev, [fieldName]: null }
        })
      }
    }
  }, [validations, values])

  const statuses = useMemo(() => {
    return Object.entries(values).reduce((prev, field) => {
      const [fieldName, fieldValue] = field as [fieldName: keyof CardFormState, fieldValue: string | string[]];
      const isArrayField = Array.isArray(fieldValue);
      return {
        ...prev,
        [fieldName]: {
          isValid: isArrayField ? fieldValue.map((el, index) => (validations[fieldName][index] as ValidationRule[]).every(validation => validation.validator(el))) : (validations[fieldName] as ValidationRule[]).every(validation => validation.validator(fieldValue))
        }
      }
    }, {})
  }, [validations, values])

  const formStatus = useMemo(() => {
    return Object.entries(statuses).every(field => {
      const [, fieldValue] = field as [fieldName: keyof CardFormState, fieldValue: { isValid: boolean | boolean[] }];
      const isArrayField = Array.isArray(fieldValue.isValid);
      return isArrayField ? (fieldValue.isValid as boolean[]).every(el => el) : fieldValue.isValid
    })
  }, [statuses])

  return {
    register,
    values,
    statuses,
    errors,
    formStatus,
  }
}
