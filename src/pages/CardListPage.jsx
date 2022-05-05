import { Header, Title } from '../components/common/styled';
import styled from 'styled-components';
import CardItem from '../components/CardItem';
import { Link } from 'react-router-dom';
import { CardInfoListContext } from '../context';

const CardListSection = styled.section`
  width: 100%;
  height: 600px;
  padding: 30px 0;
  overflow-y: scroll;
`;
const StyledCardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  list-style-type: none;
`;

const CardListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 0 0 26px 0;
`;

const CardNickName = styled.p`
  max-width: 150px;
  margin: 5px 0;
  padding: 0;

  font-size: 14px;
  font-weight: bold;
  line-height: 26px;
  color: #575757;
`;

const StyledAddCardButton = styled.button`
  cursor: pointer;

  width: 215px;
  height: 135px;
  text-align: center;

  background: #e5e5e5;
  border: none;
  border-radius: 5px;

  font-size: 30px;
  line-height: 35px;
  color: #575757;
`;

function AddCardButton() {
  return (
    <Link to="/react-payments/addCard">
      <StyledAddCardButton>+</StyledAddCardButton>
    </Link>
  );
}

function CardList() {
  return (
    <StyledCardList>
      <CardInfoListContext.Consumer>
        {value =>
          value.cardInfoList.map((cardInfo, index) => (
            <CardListItem key={index}>
              <CardItem size={'small'} {...cardInfo} />
              <CardNickName>{cardInfo.nickName || `나의 카드 ${index + 1}`}</CardNickName>
            </CardListItem>
          ))
        }
      </CardInfoListContext.Consumer>
      <AddCardButton />
    </StyledCardList>
  );
}

export default function CardListPage() {
  return (
    <>
      <Header>
        <Title>보유카드</Title>
      </Header>
      <CardListSection>
        <CardList />
      </CardListSection>
    </>
  );
}
