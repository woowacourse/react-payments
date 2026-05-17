import { useState } from 'react';

import { useFormValues } from '@/core/hooks/useFormValues';

import { validateCard, preventCard } from '../validator';

interface ChangeEvent {
  target: {
    id: string;
    value: unknown;
  };
}

export const useCard = () => {
  const { values, onChange, blur, onBlur, refs, ref, errors, valids, isValid, reset } = useFormValues({
    initialValues: { card: '' },
    validate: validateCard,
  });

  const handleChange = (e: ChangeEvent) => {
    const { id, value } = e.target;

    if (preventCard(value)) {
      setInvalidAttemp({ ...invalidAttemp, [id]: true });
      return;
    } else {
      setInvalidAttemp({ ...invalidAttemp, [id]: false });
    }

    onChange(e);
  };

  const [invalidAttemp, setInvalidAttemp] = useState({ card: false });

  const renderErrorMessage = () => {
    if (invalidAttemp.card) return 'invalidAttemp';
    if (!blur.card) return '';

    const errorCard = errors.card.filter((error) => !error.valid);

    if (errorCard[0]) return errorCard[0].message;

    return '';
  };

  return {
    values,
    onChange: handleChange,

    blur,
    onBlur,

    refs,
    ref,

    errors,
    valids,
    isValid,

    reset,

    invalidAttemp,
    renderErrorMessage,
  };
};
