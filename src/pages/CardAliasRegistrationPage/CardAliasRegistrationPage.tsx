import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styled, { CSSProperties } from "styled-components";

import NotFound from "../../components/NotFound/NotFound";
import CardPreview from "../../components/CardPreview/CardPreview";
import { Container, Input } from "../../components/common";
import useCardFetch from "../../hooks/useCardFetch";
import ROUTE_PATH from "../../constants/routePath";
import type { Card } from "../../types";

type CardAliasRegistrationPageProps = {
  onSubmit: (card: Card) => void;
};

const CardAliasRegistrationPage = ({ onSubmit }: CardAliasRegistrationPageProps) => {
  const [cardAlias, setCardAlias] = useState<Card["alias"]>("");

  const location = useLocation();
  const previewCard: Omit<Card, "alias"> = location.state;
  const { isComplete, isLoading, isError, fetchCard, initCardFetchState } = useCardFetch();

  const handleAlias = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const alias = e.target.value;
    setCardAlias(alias);
  };

  const addCard = async (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();

    const newCard: Card = {
      ...previewCard,
      alias: cardAlias,
    };

    initCardFetchState();
    await fetchCard("url", newCard);

    onSubmit(newCard);
  };

  const isAliasInputFilled = !!cardAlias.length;

  if (previewCard === null) return <NotFound />;

  if (isError) {
    return (
      <Container justify="center">
        <CompleteMessage>카드 등록에 실패했어요...😥</CompleteMessage>
        <CardPreview card={previewCard} />
        <NavigateButtonContainer>
          <Link to={ROUTE_PATH.root}>
            <NavigateButton type="button" $backgroundColor="#ececec">
              홈으로
            </NavigateButton>
          </Link>
          <NavigateButton onClick={addCard} type="button" $backgroundColor="#d4e7fd">
            다시 시도하기
          </NavigateButton>
        </NavigateButtonContainer>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container justify="center">
        <CompleteMessage>카드 등록중...</CompleteMessage>
        <CardPreview card={previewCard} />
      </Container>
    );
  }

  if (isComplete) {
    return (
      <Container justify="center">
        <CompleteMessage>카드 등록 완료✅</CompleteMessage>
        <CardPreview card={previewCard} />
        <NavigateButtonContainer>
          <Link to={ROUTE_PATH.root}>
            <NavigateButton type="button" $backgroundColor="#ececec">
              홈으로
            </NavigateButton>
          </Link>
          <Link to={ROUTE_PATH.addCard}>
            <NavigateButton type="button" $backgroundColor="#d4e7fd">
              추가 등록하기
            </NavigateButton>
          </Link>
        </NavigateButtonContainer>
      </Container>
    );
  }

  return (
    <Container justify="center">
      <CompleteMessage>
        카드 별칭을 입력하면 <br />
        등록이 완료됩니다.
      </CompleteMessage>
      <CardPreview card={previewCard} />
      <AliasForm onSubmit={addCard}>
        <AliasInput
          value={cardAlias}
          type="text"
          placeholder="카드 별칭"
          maxLength={20}
          autoFocus
          required
          onChange={handleAlias}
          width="240px"
          textAlign="center"
        />
        <AddCardButton type="submit" isAliasInputFilled={isAliasInputFilled}>
          등록 완료
        </AddCardButton>
      </AliasForm>
    </Container>
  );
};

const CompleteMessage = styled.span`
  text-align: center;
  font-size: 22px;
`;

const AliasForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  align-self: flex-end;
  width: 100%;
`;

const AliasInput = styled(Input)`
  margin-top: 60px;

  border-bottom: solid 2px #737373;

  font-size: 18px;
  line-height: 30px;
`;

const AddCardButton = styled.button<{ isAliasInputFilled: boolean }>`
  position: absolute;
  bottom: 26px;

  width: calc(100% - 56px);
  height: 50px;

  border: none;
  border-radius: 4px;

  font-size: 14px;
  font-weight: 700;

  background-color: ${(props) => (props.isAliasInputFilled ? "#d4e7fd" : "#ececec")};

  cursor: pointer;
`;

const NavigateButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`;

const NavigateButton = styled.button<{ $backgroundColor: CSSProperties["backgroundColor"] }>`
  width: 150px;
  height: 50px;

  border: none;
  border-radius: 4px;

  font-size: 14px;
  font-weight: 700;

  background-color: ${(props) => props.$backgroundColor};

  cursor: pointer;
`;

export default CardAliasRegistrationPage;
