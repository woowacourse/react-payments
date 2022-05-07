import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CardInfoListContext } from '../context';

import CardItem from '../components/CardItem';
import { GuideMessage, Header, Title } from '../components/common/styled';

const Main = styled.main`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const CardListSection = styled.section`
  width: 100%;
  max-height: 100%;
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

const GuideMessageWrapper = styled.div`
  text-align: center;
`;

export default function CardListPage() {
  const { cardList } = useContext(CardInfoListContext);

  function AddCardButton() {
    return (
      <Link to="/addCard">
        <StyledAddCardButton>+</StyledAddCardButton>
      </Link>
    );
  }

  function CardList() {
    return (
      <StyledCardList>
        {cardList.map((cardInfo, index) => (
          <Link to={`/updateCardNickName/${index}`}>
            <CardListItem key={index}>
              <CardItem size={'small'} isComplete={true} {...cardInfo} />
              <CardNickName>{cardInfo.nickName || `나의 카드 ${index + 1}`}</CardNickName>
            </CardListItem>
          </Link>
        ))}
        <AddCardButton />
      </StyledCardList>
    );
  }

  return (
    <>
      <Header>
        <Title>보유카드</Title>
      </Header>
      <Main>
        {cardList.length === 0 && (
          <GuideMessageWrapper>
            <GuideMessage>등록된 카드가 없습니다.</GuideMessage>
          </GuideMessageWrapper>
        )}
        <CardListSection>
          <CardList />
        </CardListSection>
      </Main>
    </>
  );
}
