import { Card } from 'components/common/Card/types';
import { AddCardNickNameForm } from 'components/Form/AddCardNickNameForm';
import { PageContainer } from 'components/style/PageContainer';
import { useUserCards } from 'contexts/UserCardProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterCardNickName = () => {
  const [, { addCard }] = useUserCards();
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    navigate('/');
  };

  const handleCardNickNameSubmit = (card: Card) => {
    addCard(card);
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
