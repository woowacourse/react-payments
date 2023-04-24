import Header from "components/Header";
import CardPreview from "components/CardPreview";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainPage = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  const registeredCards = Object.keys(localStorage).filter((key) =>
    key.startsWith("card")
  );

  const cardList = registeredCards.map((_, idx) => {
    const card = localStorage.getItem(`card${idx}`);
    if (!card) return [];
    return JSON.parse(card);
  });

  return (
    <S.Wrapper>
      <Header navigator={false} title="보유카드" />

      <S.Main>
        {cardList.map((card, index) => (
          <CardPreview key={index} cardInfo={card} />
        ))}

        {!cardList.length && (
          <S.Message>새로운 카드를 등록해 주세요.</S.Message>
        )}

        <S.Button onClick={goToRegister}>+</S.Button>
      </S.Main>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    width: 88vw;
  `,

  Main: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Message: styled.p`
    margin: 34px 0 12px;

    & + button {
      margin-top: 0;
    }
  `,

  Button: styled.button`
    width: 208px;
    height: 123px;
    margin: 30px 0 40px;
    font-size: 34px;
    background: #e5e5e5;
    border-radius: 5px;
    cursor: pointer;
  `,
};

export default MainPage;
