import styled from "styled-components";
import Header from "components/Header";
import CardPreview from "components/CardPreview";
import { AddButton } from "components/ButtonStyle";
import useInitMainPage from "hooks/useInitMainPage";

const MainPage = () => {
  const { goToRegister, cardList } = useInitMainPage();

  return (
    <S.Wrapper>
      <Header navigator={false} title="보유카드" />

      <S.Main>
        {cardList.map((card, index) => (
          <>
            <CardPreview key={index} cardInfo={card} />
            <S.Nickname>{card.nickname}</S.Nickname>
          </>
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

    & > header {
      margin-bottom: 8px;
    }
  `,

  Main: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Nickname: styled.p`
    margin: 16px 0 8px;
    font-size: 14px;
  `,

  Message: styled.p`
    margin: 34px 0 12px;

    & + button {
      margin-top: 0;
    }
  `,
};

export default MainPage;
