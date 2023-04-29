import React from "react";
import { useNavigate } from "react-router-dom";
import St from "./CardDetailHeaderStyled";
import { useCardDispatch } from "../../../hooks/useCard";

function CardDetailHeader() {
  const navigate = useNavigate();
  const dispatch = useCardDispatch();

  const goBack = () => {
    navigate(-1);
    dispatch({ type: "RESET" });
  };

  return (
    <St.Header>
      <St.Button onClick={goBack}>{"〈"}</St.Button>
      <St.Title>카드 추가</St.Title>
    </St.Header>
  );
}

export default CardDetailHeader;
