import useFormValidation from '../hooks/useFormValidation';
import { FormFieldState } from '../types/models';

const validateForm = ({
  numberFields,
  expiryFields,
  cvcField,
  passwordField,
  brand,
}: FormFieldState) => {
  return useFormValidation({
    numberFields,
    expiryFields,
    cvcField,
    passwordField,
    selectedBrand: brand,
  });
};

export default validateForm;
