import { FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants';
import { CardListContext } from '../../contexts/CardListContext';

const useCardNameChangeForm = (id: number) => {
  const { updateCardName } = useContext(CardListContext);
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!(event.currentTarget.elements[0] instanceof HTMLInputElement)) return;

    updateCardName(id, event.currentTarget.elements[0].value);
    navigate(PATH.ROOT);
  };

  return { handleSubmit };
};

export { useCardNameChangeForm };
