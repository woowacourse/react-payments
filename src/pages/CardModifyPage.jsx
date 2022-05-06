import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CardContext } from "contexts/CardContext";

import { FlexWrapper, InputContainer } from "components/common/styled";
import { Card, Button } from "components/common";
import { InputUnderline } from "components/common/InputUnderline";

export const CardModifyPage = () => {
  const cards = useContext(CardContext);
  const { id } = useParams();
  console.log("cards : ", cards);

  return (
    <>
      {cards.list && (
        <>
          <FlexWrapper
            height="calc(100vh - 45px)"
            flexDirection="column"
            justifyContent="center"
          >
            <h3>카드등록이 완료되었습니다.</h3>
            <InputContainer>
              <Card
                cardType={cards.list[0].cardType}
                cardNumbers={cards.list[0].cardNumbers}
                expireDate={cards.list[0].expireDate}
                ownerName={cards.list[0].ownerName}
              />
              <InputUnderline placeholder="카드 별칭을 입력해주세요." />
            </InputContainer>
          </FlexWrapper>
          <Button disabled={false}>확인</Button>
        </>
      )}
    </>
  );
};
