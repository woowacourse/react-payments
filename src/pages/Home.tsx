import { CreditCard } from 'components/common/Card/CreditCard';
import Header from 'components/common/Header/Header';
import { useNavigate } from 'react-router-dom';
import CardDB from 'db/Cards';
import styled from 'styled-components';
import { PageContainer } from 'components/style/PageContainer';

function Home() {
  const navigate = useNavigate();
  const goRegister = () => {
    navigate('/register');
  };

  return (
    <>
      <PageContainer>
        <Header text={'보유카드'} />
        <CardContainer>
          {CardDB.getCards().length ? null : (
            <AddMsgSpan>{'새로운 카드를 등록해주세요'}</AddMsgSpan>
          )}
          {CardDB.getCards().map((card) => (
            <CardWrapper>
              <CreditCard card={card} />
              {<CardNameSpan>{card.cardName}</CardNameSpan>}
            </CardWrapper>
          ))}
          <RegisterButton onClick={goRegister}>+</RegisterButton>
        </CardContainer>
      </PageContainer>
    </>
  );
}

const AddMsgSpan = styled.span`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const RegisterButton = styled.button`
  width: 208px;
  height: 123px;
  border: none;
  font-size: 30px;
  color: #575757;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const CardNameSpan = styled.span`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 26px;
`;

export default Home;
