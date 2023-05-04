import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NotFound from "../../components/NotFound/NotFound";
import CardPreview from "../../components/CardPreview/CardPreview";
import { Container, Input } from "../../components/common";
import type { Card } from "../../types";
import ROUTE_PATH from "../../constants/routePath";

type CardAliasRegistrationPageProps = {
  onSubmit: (card: Card) => void;
};

const CardAliasRegistrationPage = ({ onSubmit }: CardAliasRegistrationPageProps) => {
  const [cardAlias, setCardAlias] = useState<Card["alias"]>("");

  const navigate = useNavigate();
  const location = useLocation();
  const previewCard: Omit<Card, "alias"> = location.state;

  const handleAlias = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const alias = e.target.value;
    setCardAlias(alias);
  };

  const addCard = () => {
    const newCard: Card = {
      ...previewCard,
      alias: cardAlias,
    };

    onSubmit(newCard);

    navigate(ROUTE_PATH.root, { replace: true });
  };

  const isAliasInputFilled = !!cardAlias.length;

  if (previewCard === null) {
    return <NotFound />;
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

export default CardAliasRegistrationPage;
