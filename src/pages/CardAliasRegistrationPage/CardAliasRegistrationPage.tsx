import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

import NotFoundPage from "../NotFoundPage/NotFoundPage";
import CardPreview from "../../components/CardPreview/CardPreview";
import { Container, Input } from "../../components/@common";
import SwayingLoader2 from "../../components/@animations/SwayingLoader2/SwayingLoader2";
import useCardFetch from "../../hooks/useCardFetch";
import ROUTE_PATH from "../../constants/routePath";
import type { Card } from "../../types";
import Button from "../../components/@common/Button/Button";
import FlexBox from "../../components/@common/FlexBox";

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

  if (previewCard === null) return <NotFoundPage />;

  if (isError) {
    return (
      <Container justify="center">
        <StatusMessage>카드 등록에 실패했어요...😥</StatusMessage>
        <CardPreview card={previewCard} />
        <FlexBox justify="space-around">
          <Link to={ROUTE_PATH.root}>
            <Button type="button" bgColor="var(--color-pale)" width="150px">
              홈으로
            </Button>
          </Link>
          <Button onClick={addCard} type="button" bgColor="var(--color-primary)" width="150px">
            다시 시도하기
          </Button>
        </FlexBox>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container justify="center">
        <StatusMessage>카드 등록중...</StatusMessage>
        <SwayingLoader2>
          <CardPreview card={previewCard} />
        </SwayingLoader2>
      </Container>
    );
  }

  if (isComplete) {
    return (
      <Container justify="center">
        <StatusMessage>카드 등록 완료✅</StatusMessage>
        <CardPreview card={previewCard} />
        <FlexBox justify="space-around">
          <Link to={ROUTE_PATH.root}>
            <Button type="button" bgColor="var(--color-pale)" width="150px">
              홈으로
            </Button>
          </Link>
          <Link to={ROUTE_PATH.addCard}>
            <Button type="button" bgColor="var(--color-primary)" width="150px">
              추가 등록하기
            </Button>
          </Link>
        </FlexBox>
      </Container>
    );
  }

  return (
    <Container justify="center">
      <StatusMessage>
        카드 별칭을 입력하면 <br />
        등록이 완료됩니다.
      </StatusMessage>
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

const StatusMessage = styled.span`
  text-align: center;
  font-size: 22px;
`;

const AliasForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AliasInput = styled(Input)`
  margin-top: 60px;

  border-bottom: solid 2px #737373;

  font-size: 18px;
  line-height: 30px;
`;

const AddCardButton = styled(Button)<{ isAliasInputFilled: boolean }>`
  position: absolute;
  bottom: 26px;
  width: calc(100% - 56px);
  background-color: ${(props) => `var(--color-${props.isAliasInputFilled ? "primary" : "pale"})`};
`;

export default CardAliasRegistrationPage;
