import React, { forwardRef } from "react";
import { useAppDispatch, useAppState } from "../../../hooks/hooks";
import { ActionType } from "../../../types";
import { isNum, transformNumToBullet } from "../../../utils";
import { createAction } from "../../Provider";
import CardPasswordInput from "./CardPasswordInput";

type Props = { 
  position: number,
  disabled?: boolean
};

const CardPasswordInputContainer = forwardRef<HTMLInputElement, Props>(({ position, disabled }, ref) => {
  const { password } = useAppState();
  const dispatch = useAppDispatch();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const lastChar = value.slice(-1);

    if (value.length > 1) return;

    if (value.length > 0) {
      if (!isNum(lastChar)) return;
      password[position] = lastChar;
      dispatch(createAction(ActionType.INPUT_PASSWORD, password));
      return;
    }

    password[position] = '';
    dispatch(createAction(ActionType.INPUT_PASSWORD, password));
  };

  console.log('password : ', password);
  const val = password[position] ? transformNumToBullet(password[position]) : '';
  console.log('val : ', val);
  return <CardPasswordInput onChange={handleChange} value={val} disabled={disabled} ref={ref} />
});

export default CardPasswordInputContainer;
