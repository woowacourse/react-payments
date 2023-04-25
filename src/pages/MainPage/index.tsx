import Header from "components/Header";
import CardPreview from "components/CardPreview";
import styled from "styled-components";
import { AddButton } from "components/ButtonStyle";
import useInitMainPage from "hooks/useInitMainPage";

const MainPage = () => {
  const { goToRegister, cardList } = useInitMainPage();

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

        <AddButton onClick={goToRegister}>+</AddButton>
      </S.Main>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    max-width: 480px;
    width: 88%;
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
};

export default MainPage;
