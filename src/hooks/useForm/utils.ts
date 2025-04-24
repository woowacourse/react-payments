import { ValidationType } from './types';

export function validate(validation: ValidationType, value: string) {
  if (validation.required && !value) {
    return validation.errorMessage;
  }

  if (validation.length && value.length < validation.length) {
    return validation.errorMessage;
  }

  if (validation.validateRegex && !validation.validateRegex.test(value)) {
    return validation.errorMessage;
  }

  return '';
}
