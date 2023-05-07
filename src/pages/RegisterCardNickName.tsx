import { Card } from 'components/common/Card/types';
import { RegisterCardLoadingBar } from 'components/common/LodaingBar/RegisterCardLoadingBar';
import { AddCardNickNameForm } from 'components/Form/AddCardNickNameForm';
import { PageContainer } from 'components/style/PageContainer';
import { useUserCards } from 'contexts/UserCardProvider';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterCardNickName = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    actions: { addCard },
  } = useUserCards();
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    navigate('/');
  };

  const handleCardNickNameSubmit = (card: Card) => {
    setIsSubmitting((prev) => !prev);
    addCard(card)
      .then(() => setIsSubmitting((prev) => !prev))
      .then(goHome);
  };

  return (
    <Container>
      {!isSubmitting ? (
        <AddCardNickNameForm card={location.state.card} onSubmit={handleCardNickNameSubmit} />
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
