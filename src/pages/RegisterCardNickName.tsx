import { Card } from 'components/common/Card/types';
import { AddCardNickNameForm } from 'components/Form/AddCardNickNameForm';
import { PageContainer } from 'components/style/PageContainer';
import { CardDB } from 'db/Cards';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterCardNickName = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    navigate('/');
  };

  const handleCardNickNameSubmit = (card: Card) => {
    CardDB.registerCard(card);
    goHome();
  };

  return (
    <Container>
      <AddCardNickNameForm card={location.state.card} onSubmit={handleCardNickNameSubmit} />
    </Container>
  );
};

const Container = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
