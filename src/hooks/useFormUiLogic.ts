import { useEffect, useRef } from 'react';
import useSequentialReveal from './useSequentialReveal';
import useFormValidation from './useFormValidation';
import { useBrandContext } from '../contexts/BrandContext';
import { useNumbersContext } from '../contexts/NumbersContext';
import { useExpiryDateContext } from '../contexts/ExpiryDateContext';
import { useCvcContext } from '../contexts/CvcContext';
import { usePasswordContext } from '../contexts/PasswordContext';

function useFormUiLogic() {
  const { numberFields, numberInputRefs } = useNumbersContext();
  const { expiryFields, expiryInputRefs } = useExpiryDateContext();
  const { cvcField, cvcInputRef } = useCvcContext();
  const { passwordField, passwordInputRef } = usePasswordContext();
  const { brand, brandSelectRef } = useBrandContext();

  const isFormValid = useFormValidation({
    numberFields,
    expiryFields,
    cvcField,
    passwordField,
    selectedBrand: brand,
  });

  const triggers = [
    true,
    numberFields.every(
      (f) => !f.hasError && f.value.length === f.maximumLength
    ),
    brand !== '',
    expiryFields.every(
      (f) => !f.hasError && f.value.length === f.maximumLength
    ),
    !cvcField.hasError && cvcField.value.length === cvcField.maximumLength,
  ];
  const revealFlags = useSequentialReveal(triggers, 0);

  const prevRef = useRef<boolean[]>(revealFlags);

  useEffect(() => {
    const prev = prevRef.current;
    const newIdx = revealFlags.findIndex((on, i) => on && !prev[i]);
    if (newIdx >= 0) {
      switch (newIdx) {
        case 0:
          numberInputRefs[0].current?.focus();
          break;
        case 1:
          brandSelectRef.current?.focus();
          break;
        case 2:
          expiryInputRefs[0].current?.focus();
          break;
        case 3:
          cvcInputRef.current?.focus();
          break;
        case 4:
          passwordInputRef.current?.focus();
          break;
      }
    }
    prevRef.current = revealFlags;
  }, [revealFlags, expiryFields, numberFields]);

  return {
    isFormValid,
    revealFlags,
  };
}

export default useFormUiLogic;
