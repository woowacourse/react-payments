import React, { useContext } from "react";
import { CardContext } from "contexts/CardContext";

import { FlexWrapper, InputContainer } from "components/common/styled";
import { Card, Button } from "components/common";
import { InputUnderline } from "components/common/InputUnderline";

export const CardModifyPage = () => {
  const cards = useContext(CardContext);
  // console.log(cards);
  return (
    <>
      <FlexWrapper
        height="calc(100vh - 45px)"
        flexDirection="column"
        justifyContent="center"
      >
        <h3>카드등록이 완료되었습니다.</h3>
        <InputContainer>
          <Card
            cardType={cards[0].cardType}
            cardNumbers={cards[0].cardNumber}
            expireDate={cards[0].expireDate}
            ownerName={cards[0].ownerName}
          />
          <InputUnderline placeholder="카드 별칭을 입력해주세요." />
        </InputContainer>
      </FlexWrapper>
      <Button disabled={false}>확인</Button>
    </>
  );
};
