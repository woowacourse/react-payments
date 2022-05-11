import React, { useContext } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { CardContext } from "contexts/CardContext";

import {
  FlexWrapper,
  InputContainer,
  Card,
  Button,
  Form,
  InputUnderline,
} from "components/common";

export const CardModifyPage = () => {
  const cards = useContext(CardContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  const isEditMode = searchParams.get("edit");

  const setCardNickname = (e) => {
    e.preventDefault();

    cards.list[id].cardNickname =
      e.target["input-nickname"].value || cards.list[id].cardNickname;

    navigate("/cardList");
  };

  return (
    <>
      {cards.list && (
        <>
          <Form onSubmit={(e) => setCardNickname(e)}>
            <FlexWrapper
              height="calc(100vh - 50px)"
              flexDirection="column"
              justifyContent="center"
            >
              <h3>
                {isEditMode
                  ? "새 카드별칭을 입력해주세요."
                  : "카드등록이 완료되었습니다."}
              </h3>
              <InputContainer>
                <Card
                  cardType={cards.list[id].cardType}
                  cardNumbers={cards.list[id].cardNumbers}
                  expireDate={cards.list[id].expireDate}
                  ownerName={cards.list[id].ownerName}
                />
                <InputUnderline
                  id="input-nickname"
                  placeholder="카드 별칭을 입력해주세요."
                />
              </InputContainer>
            </FlexWrapper>
            <Button type="submit" disabled={false}>
              확인
            </Button>
          </Form>
        </>
      )}
    </>
  );
};
