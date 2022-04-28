import React from "react";
import { useAppDispatch, useAppState } from "../../../hooks/hooks";
import { ActionType } from "../../../types";
import { isNum, removeWhiteSpaces, transformToCardFormat } from "../../../utils";
import { createAction } from "../../Provider";
import CardNumberInput from "./CardNumberInput";

function CardNumberInputContainer() {
  const { cardNumber } = useAppState();
  const dispatch = useAppDispatch();

  const handleCardNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const lastChar = value.charAt(value.length - 1);
    const pureCardNumber = removeWhiteSpaces(value).split('-').join('');

    // 값을 추가하는 경우 
    if (cardNumber.length < pureCardNumber.length) {

      // 16글자 이상 입력한 경우
      if (cardNumber.length >= 16) return;

      // 숫자가 아니라면 아웃!
      if (!isNum(lastChar)) return;
      dispatch(createAction(ActionType.INPUT_CARDNUMBER, cardNumber + lastChar));
      return;
    }

    // 값을 지우는 경우
    const cn = cardNumber.substring(0, cardNumber.length - 1);
    dispatch(createAction(ActionType.INPUT_CARDNUMBER, cn));
  }

  return <CardNumberInput onChange={handleCardNumberInput} value={transformToCardFormat(cardNumber)} />
}

export default CardNumberInputContainer;
