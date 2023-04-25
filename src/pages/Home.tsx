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
          {CardDB.getCards().length ? '' : <span>{'새로운 카드를 등록해주세요'}</span>}
          {CardDB.getCards().map((card) => (
            <CreditCard card={card} />
          ))}
          <RegisterButton onClick={goRegister}>+</RegisterButton>
        </CardContainer>
      </PageContainer>
    </>
  );
}

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
  gap: 35px;
`;

export default Home;
