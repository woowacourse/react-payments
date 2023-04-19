import React from "react";
import St from "./styled";

function CardDetailHeader() {
  return (
    <St.Header>
      <St.Button>{"〈"}</St.Button>
      <St.Title>카드 추가</St.Title>
    </St.Header>
  );
}

export default CardDetailHeader;
