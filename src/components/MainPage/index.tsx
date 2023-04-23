import Header from 'components/Header';
import CardPreview from 'components/RegisterPage/CardPreview';
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
          <CardPreview key={index} cardInfo={cardInfo}></CardPreview>
        ))
      ) : (
        <S.Message>새로운 카드를 등록해 주세요.</S.Message>
      )}
      <S.Button onClick={goToRegister}>+</S.Button>
    </div>
  );
};

const S = {
  Message: styled.p`
    margin: 34px 0 12px;
  `,

  Button: styled.button`
    width: 208px;
    height: 123px;
    font-size: 34px;
    background: #e5e5e5;
    border-radius: 5px;
    cursor: pointer;
  `,
};

export default MainPage;
