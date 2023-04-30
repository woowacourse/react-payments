import CardPreview from 'pages/RegisterPage/CardPreview';
import Header from 'components/Header';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from 'types/Card';
import { getLocalStorage } from 'utils/localStorage';

const MainPage = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  };

  const cardInfoArray = getLocalStorage('card');

  return (
    <div>
      <Header navigator={false} title="보유카드" />

      {cardInfoArray.length > 0 ? (
        cardInfoArray.map((cardInfo: Card, index: number) => (
          <>
            <CardPreview key={index} cardInfo={cardInfo}></CardPreview>
          </>
        ))
      ) : (
        <Message>새로운 카드를 등록해 주세요.</Message>
      )}

      <AddButton onClick={goToRegister}>+</AddButton>
    </div>
  );
};

const Message = styled.p`
  margin: 34px 0 12px;
`;

const AddButton = styled.button`
  width: 208px;
  height: 123px;
  font-size: 34px;
  background: #e5e5e5;
  border-radius: 5px;
  margin-bottom: 50px;
  cursor: pointer;
`;

export default MainPage;
