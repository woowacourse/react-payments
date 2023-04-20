import React from "react";
import { useNavigate } from "react-router-dom";
import St from "./styled";

function CardDetailHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <St.Header>
      <St.Button onClick={goBack}>{"〈"}</St.Button>
      <St.Title>카드 추가</St.Title>
    </St.Header>
  );
}

export default CardDetailHeader;
