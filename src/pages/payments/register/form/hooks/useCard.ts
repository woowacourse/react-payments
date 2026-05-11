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
  const {
    values: { card },
    onChange,
    blur: { card: blurCard },
    onBlur,
    refs,
    ref,
    errors,
    valids,
    isValid,
  } = useFormValues({
    initialValues: { card: '' },
    validate: validateCard,
  });

  const handleChangeCard = (e: ChangeEvent) => {
    const { value } = e.target;

    if (preventCard(value)) {
      setCardInvalidAttemp(true);
      return;
    } else {
      setCardInvalidAttemp(false);
    }

    onChange(e);
  };

  const [cardInvalidAttemp, setCardInvalidAttemp] = useState(false);

  const renderErrorMessageCard = () => {
    if (cardInvalidAttemp) return '유효한 비밀번호를 입력해주세요';
    if (!blurCard) return '';

    const errorCard = errors.card.filter((error) => !error.valid);

    if (errorCard[0]) return errorCard[0].message;

    return '';
  };

  return {
    value: card,
    onChange: handleChangeCard,

    blurValue: blurCard,
    onBlur,

    refs,
    ref,

    errors,
    valids,
    isValid,

    invalidAttemp: cardInvalidAttemp,
    renderErrorMessage: renderErrorMessageCard,
  };
};
