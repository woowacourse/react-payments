import { Header, Title } from '../components/common/styled';
import styled from 'styled-components';
import CardItem from '../components/CardItem';
import { Link } from 'react-router-dom';

const CardListSection = styled.section`
  width: 100%;
  padding: 30px 0;

  height: 600px;
  overflow-y: scroll;
`;
const CardList = styled.ul`
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

const CardInfoList = [
  {
    cardNumber: ['1234', '5678', '9012', '3456'],
    holderName: 'SUN',
    expireDate: ['12', '23'],
    isComplete: true,
  },
  {
    cardNumber: ['1234', '5678', '9012', '3456'],
    holderName: 'SUN',
    expireDate: ['12', '23'],
    isComplete: true,
  },
  {
    cardNumber: ['1234', '5678', '9012', '3456'],
    holderName: 'SUN',
    expireDate: ['12', '23'],
    isComplete: true,
  },
  {
    cardNumber: ['1234', '5678', '9012', '3456'],
    holderName: 'SUN',
    expireDate: ['12', '23'],
    isComplete: true,
  },
  {
    cardNumber: ['1234', '5678', '9012', '3456'],
    holderName: 'SUN',
    expireDate: ['12', '23'],
    isComplete: true,
  },
  {
    cardNumber: ['1234', '5678', '9012', '3456'],
    holderName: 'SUN',
    expireDate: ['12', '23'],
    isComplete: true,
  },
];

export default function CardListPage() {
  return (
    <>
      <Header>
        <Title>보유카드</Title>
      </Header>
      <CardListSection>
        <CardList>
          {CardInfoList.map((cardInfo, index) => (
            <CardListItem key={index}>
              <CardItem size={'small'} {...cardInfo} />
              <CardNickName>테스트</CardNickName>
            </CardListItem>
          ))}
          <AddCardButton />
        </CardList>
      </CardListSection>
    </>
  );
}
