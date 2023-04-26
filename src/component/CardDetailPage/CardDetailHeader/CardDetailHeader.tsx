import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./CardDetailHeaderStyled";
import { NAVIGATE } from "../../../abstract/constants";

function CardDetailHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(NAVIGATE.BACK);
  };

  return (
    <Style.Header>
      <Style.Button onClick={goBack}>{"〈"}</Style.Button>
      <Style.Title>카드 추가</Style.Title>
    </Style.Header>
  );
}

export default CardDetailHeader;
