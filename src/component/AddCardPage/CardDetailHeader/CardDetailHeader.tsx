import React from "react";
import St from "./CardDetailHeaderStyled";
import { useNavigate } from "react-router-dom";
import { useCardDispatch } from "../../../contexts/CardContext";

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
