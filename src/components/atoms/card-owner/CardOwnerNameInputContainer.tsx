import React from "react";
import CardOwnerNameInput from "./CardOwnerNameInput";
import { useAppDispatch, useAppState } from "../../../hooks/hooks";
import { ActionType } from "../../../types";
import { createAction } from "../../Provider";
import { isEnglish } from "../../../utils";
import { MAX_NAME_LENGTH } from "../../../constants";

function CardOwnerNameInputContainer() {
  const { name } = useAppState();
  const dispatch = useAppDispatch();

  const handleChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: name } = event.target;

    // value의 총 길이는 30을 넘으면 안 된다
    if (name.length > MAX_NAME_LENGTH) return;

    // 영어만 입력 받는다
    if (!isEnglish(name)) return;

    // 대문자로 변환을 해준다
    const upperName = name.toUpperCase();

    // name을 업데이트 한다
    dispatch(createAction(ActionType.INPUT_NAME, upperName));
  }

  return (
    <>
      <CardOwnerNameInput onChange={handleChage} value={name} />
    </>
  )
};

export default CardOwnerNameInputContainer;