import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import CardListEmpty from './components/CardListEmpty';
import CardListError from './components/CardListError';
import CardListLoading from './components/CardListLoading';
import CardListSuccess from './components/CardListSuccess';
import {useCards} from './hooks/useCards';

const CardListPage = () => {
  const navigate = useNavigate();
  const {state, refetch, removeCard} = useCards();
  const cardCount = state.status === 'success' ? state.cards.length : null;

  const handleAddCard = () => {
    navigate('/register');
  };

  const renderContent = () => {
    if (state.status === 'idle' || state.status === 'loading') return <CardListLoading />;
    if (state.status === 'error') return <CardListError message={state.message} onRetry={refetch} />;
    if (state.cards.length === 0) return <CardListEmpty onAddCard={handleAddCard} />;

    return <CardListSuccess cards={state.cards} onAddCard={handleAddCard} onDeleteCard={removeCard} />;
  };

  return (
    <Wrapper>
      <Title>보유 카드{cardCount ? ` (${cardCount})` : ''}</Title>
      <Content>{renderContent()}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 42px 28px 0;
`;

const Title = styled.h1`
  color: #000;
  font-size: 18px;
  font-weight: 700;
`;

const Content = styled.div`
  flex: 1;
  margin-top: 16px;
  overflow-y: auto;
`;

export default CardListPage;
