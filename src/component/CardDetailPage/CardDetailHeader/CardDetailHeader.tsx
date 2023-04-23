import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./CardDetailHeaderStyled";

function CardDetailHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Style.Header>
      <Style.Button onClick={goBack}>{"〈"}</Style.Button>
      <Style.Title>카드 추가</Style.Title>
    </Style.Header>
  );
}

export default CardDetailHeader;
