import React from "react";
import CVCInput from "./CVCInput";
import { useAppDispatch, useAppState } from "../../../hooks/hooks";
import { createAction } from "../../../context/Provider";
import { ActionType } from "../../../types";
import { isNum } from "../../../utils";

function CVCInputContainer() {
  const { cvc } = useAppState();
  const dispatch = useAppDispatch();

  const handleChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const lastChar = value.slice(-1);

    if (value.length > 3) return;

    if (cvc.length < value.length) {
      if (!isNum(lastChar)) return;

      dispatch(createAction(ActionType.INPUT_CVC, cvc + lastChar));
      return;
    }

    dispatch(createAction(ActionType.INPUT_CVC, cvc.slice(0, cvc.length - 1)));
  }
  return <CVCInput onChange={handleChage} value={cvc} />
}

export default CVCInputContainer;
