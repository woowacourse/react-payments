import { useState } from 'react';
import styled from '@emotion/styled';
import { ErrorMessage } from './ErrorMessage';
import { CardInput } from '../../style/CardStyles';
import { Validator } from '../../validators/CardValidator';

export function CardCVCInput() {
  const [cardCVC, setCardCVC] = useState('');

  const [fieldErrors, setError] = useState({
    state: false,
    message: '',
  });

  const changeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const result = Validator.isNumber(value);
    if (!result.valid) {
      setError({ ...fieldErrors, state: true, message: result.message });
      return;
    }
    setError({ ...fieldErrors, state: false, message: '' });
    setCardCVC(value);
  };

  const handleBlurCVC = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const result = Validator.isValidCardCVCLength(value, e.target.maxLength);
    if (!result.valid) {
      setError({ ...fieldErrors, state: true, message: result.message });
      return;
    }
    setError({ ...fieldErrors, state: false, message: '' });
  };

  return (
    <CardCVCContainer>
      <CardCVCLabel htmlFor="card-cvc-input">CVC</CardCVCLabel>
      <CardInput
        type="text"
        maxLength={3}
        inputMode="numeric"
        placeholder="123"
        id="card-cvc-input"
        value={cardCVC}
        onChange={changeCardCVC}
        onBlur={handleBlurCVC}
        $fieldErrors={fieldErrors.state}
      />
      <ErrorMessage message={fieldErrors['message']} />
    </CardCVCContainer>
  );
}

const CardCVCContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const CardCVCLabel = styled.label`
  font-size: 12px;
`;
