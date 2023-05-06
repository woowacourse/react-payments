import styled from "styled-components";
import Header from "components/Header";
import Button from "components/Button";
import CardPreview from "components/CardPreview";
import { AddButton } from "components/Button";
import useInitMainPage from "hooks/useInitMainPage";
import { CardInfo } from "types";

interface Props {
  cardList: CardInfo[];
}

const MainPage = ({ cardList }: Props) => {
  const { goToRegister } = useInitMainPage();

  return (
    <S.Wrapper>
      <Header navigator={false} title="보유카드" />

      <S.Main>
        {cardList
          .map((card, index) => (
            <div key={index}>
              <CardPreview cardInfo={card} />
              <S.Nickname>{card.nickname}</S.Nickname>
            </div>
          ))
          .reverse()}

        {!cardList.length && (
          <S.Message>새로운 카드를 등록해 주세요.</S.Message>
        )}

        <Button
          children="+"
          name="카드 추가 버튼"
          ButtonStyle={AddButton}
          onClick={goToRegister}
        />
      </S.Main>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    max-width: 480px;

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
    margin: -6px 0 8px;
    font-size: 14px;
    text-align: center;
  `,

  Message: styled.p`
    margin: 34px 0 12px;

    & + button {
      margin-top: 0;
    }
  `,
};

export default MainPage;
