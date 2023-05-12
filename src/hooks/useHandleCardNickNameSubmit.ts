import { Card } from 'components/common/Card/types';
import { useCardAddForm } from 'contexts/CardAddFormProvider';
import { useUserCards } from 'contexts/UserCardProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useHandleCardNickNameSubmit = () => {
  const { card, resetCardForm } = useCardAddForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    actions: { addCard },
  } = useUserCards();
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const handleCardNickNameSubmit = (card: Card) => {
    setIsSubmitting(true);
    addCard(card)
      .then(() => {
        resetCardForm();
        goHome();
      })
      .catch((e) => {
        alert(`[ERROR] ${e.message} 잠시후 다시 시도해주세요`);
      })
      .finally(() => setIsSubmitting(false));
  };

  return { handleCardNickNameSubmit, isSubmitting };
};
