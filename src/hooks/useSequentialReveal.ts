import { useEffect, useRef, useState } from 'react';
import useFormValidation from './useFormValidation';
import { useBrandContext } from '../contexts/BrandContext';
import { useNumbersContext } from '../contexts/NumbersContext';
import { useExpiryDateContext } from '../contexts/ExpiryDateContext';
import { useCvcContext } from '../contexts/CvcContext';
import { usePasswordContext } from '../contexts/PasswordContext';

function useSequentialReveal() {
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

  const [maxIndex, setMaxIndex] = useState(0);
  const prevIndexRef = useRef(0);

  useEffect(() => {
    const nextIdx = triggers.findIndex((ok, i) => ok && i > maxIndex);
    if (nextIdx >= 0) {
      setMaxIndex(nextIdx);
    }
  }, [triggers, maxIndex]);

  useEffect(() => {
    if (prevIndexRef.current === maxIndex) return;

    switch (maxIndex) {
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

    prevIndexRef.current = maxIndex;
  }, [maxIndex]);

  const revealFlags = triggers.map((_, i) => i <= maxIndex);

  return {
    isFormValid,
    revealFlags,
  };
}

export default useSequentialReveal;
