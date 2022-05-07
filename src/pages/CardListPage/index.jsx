import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Cards from './Cards';
import { AppContainer } from '../../components';

const Title = styled.h2`
  color: #383838;
  font-size: 16px;
  font-weight: normal;
  margin: 0 0 65px 10px;
`;

const Content = styled.div`
  height: 83%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const PlusCard = styled.div`
  background: #e5e5e5;
  border-radius: 5px;
  color: #575757;
  cursor: pointer;
  font-size: 40px;
  height: 133px;
  line-height: 133px;
  margin: auto;
  padding: 19px;
  text-align: center;
  width: 213px;
`;

function CardListPage({ cards }) {
  const navigate = useNavigate();

  const onClickPlusButton = () => {
    navigate('/add');
  };

  return (
    <AppContainer>
      <Title>보유카드</Title>
      <Content>
        <Cards cards={cards} />
        <PlusCard onClick={onClickPlusButton}>+</PlusCard>
      </Content>
    </AppContainer>
  );
}

export default memo(CardListPage);
