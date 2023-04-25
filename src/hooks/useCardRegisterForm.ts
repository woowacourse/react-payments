import { ChangeEvent, FormEvent, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../constants';
import { validateNonEmptyInput } from '../utils/validator';
import { PaymentsContext } from '../contexts/PaymentsContext';

const useCardRegisterForm = (id: number) => {
  const { updateCardName } = useContext(PaymentsContext);
  const [isValidCardName, setIsValidCardName] = useState(true);
  const [submitError, setSubmitError] = useState(false);
  const navigate = useNavigate();

  const handleCardNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const isValid = validateNonEmptyInput(event.target.value);
    setIsValidCardName(isValid);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!(event.currentTarget.elements[0] instanceof HTMLInputElement)) return;
    if (!isValidCardName) {
      setSubmitError(true);
      return;
    }

    updateCardName(id, event.currentTarget.elements[0].value);
    navigate(PATH.ROOT);
  };

  return { isValidCardName, submitError, handleCardNameChange, handleSubmit };
};

export { useCardRegisterForm };
