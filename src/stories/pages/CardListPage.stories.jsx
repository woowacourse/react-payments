import styled from 'styled-components';

import Cards from '../../pages/CardListPage/Cards';

export default {
  title: 'Example/Page',
  component: [Cards],
};

const StyledPage = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 30px;
  width: 400px;
  height: 757px;
`;

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

function CardListTemplate({ cards }) {
  return (
    <StyledPage>
      <Title>보유카드</Title>
      <Content>
        <Cards cards={cards} />
        <PlusCard>+</PlusCard>
      </Content>
    </StyledPage>
  );
}

const CardList = CardListTemplate.bind({});
CardList.args = {
  cards: [
    {
      cardColor: '#ADD8E6',
      cardName: '개인 카드',
      cardOwnerName: 'HALEE',
      cardNumber: '1111 2222 •••• ••••',
      validDate: '05/22',
    },
    {
      cardColor: 'black',
      cardName: '법인 카드',
      cardOwnerName: 'COMPANY',
      cardNumber: '9999 8888 •••• ••••',
      validDate: '05/22',
    },
  ],
};

export { CardList };
