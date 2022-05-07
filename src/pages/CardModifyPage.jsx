import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CardContext } from "contexts/CardContext";

import { FlexWrapper, InputContainer } from "components/common/styled";
import { Card, Button } from "components/common";
import { InputUnderline } from "components/common/InputUnderline";
import { Form } from "components/common/Form";

export const CardModifyPage = () => {
  const cards = useContext(CardContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const setCardNickname = (e) => {
    e.preventDefault();
    // console.log(e.target["input-nickname"].value);
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
              <h3>카드등록이 완료되었습니다.</h3>
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
