import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CreditCard, Header } from 'components/common';
import { PageContainer } from 'components/style/PageContainer';
import { Fragment } from 'react';
import { useUserCards } from 'contexts/UserCardProvider';

function Home() {
  const [userCards] = useUserCards();
  const navigate = useNavigate();

  const goRegister = () => {
    navigate('/register');
  };

  return (
    <PageContainer>
      <Header text={'보유카드'} />
      <CardContainer>
        {userCards.length <= 0 && <Text>새로운 카드를 등록해주세요</Text>}
        {userCards.map((card) => (
          <Fragment>
            <CreditCard card={card} />
            <CardNickName>{card.nickName}</CardNickName>
          </Fragment>
        ))}
        <RegisterButton onClick={goRegister}>+</RegisterButton>
      </CardContainer>
    </PageContainer>
  );
}

const Text = styled.span`
  margin-bottom: 20px;
`;

const RegisterButton = styled.button`
  width: 208px;
  height: 123px;
  border: none;
  font-size: 30px;
  color: #575757;
  border-radius: 5px;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
`;

const CardNickName = styled.span`
  padding: 20px;
`;

export default Home;
