import React from "react";
import { useAppState } from "../../../hooks/hooks";
import ConfirmButton from "./ConfirmButton";

type Props = {
  children: React.ReactNode,
}

function ConfirmButtonContainer({ children }: Props) {
  const { cardNumber, expiredPeriod, name, cvc, password } = useAppState();
  const isPasswordFilled = password.every((pw) => pw);

  let _disabled = true;
  if (cardNumber.length === 16 && expiredPeriod.length === 4 && name.length > 0 && cvc.length === 3 && isPasswordFilled ) {
    _disabled = false;
  }

  return (
    <ConfirmButton onClick={() => alert('다음으로 넘어갑니다')} {...(_disabled ? { disabled: true } : {})}>
      { children }
    </ConfirmButton>
  )
}

export default ConfirmButtonContainer;