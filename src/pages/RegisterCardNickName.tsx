import { Card } from 'components/common/Card/types';
import { RegisterCardLoadingBar } from 'components/common/LodaingBar/RegisterCardLoadingBar';
import { AddCardNickNameForm } from 'components/Form/AddCardNickNameForm';
import { PageContainer } from 'components/style/PageContainer';
import { useCardAddForm } from 'contexts/CardAddFormProvider';
import { useUserCards } from 'contexts/UserCardProvider';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterCardNickName = () => {
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

  return (
    <Container>
      {!isSubmitting ? (
        <AddCardNickNameForm card={card} onSubmit={handleCardNickNameSubmit} />
      ) : (
        <RegisterCardLoadingBar />
      )}
    </Container>
  );
};

const Container = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
