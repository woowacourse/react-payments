import React, { useEffect, useRef } from "react";
import { useAppState } from "../../../hooks/hooks";
import CardPasswordInputContainer from "./CardPasswordInputContainer";

function CardPasswordInputContainerList() {
  const { cardNumber, expiredPeriod, name, cvc, password } = useAppState();

  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 다른 모든 필드가 채워져 있다면
    if (cardNumber.length === 16 && expiredPeriod.length === 4 && name.length > 0 && cvc.length === 3) {
      // 첫번째 필드에 값이 비었다면
      !password[0] && inputRef1.current?.focus();
      // 첫번째 필드는 값이 있고 두번째 필드에 값이 비었다면
      (password[0] && !password[1]) && inputRef2.current?.focus();
    }
  }, [password]);

  return(
    <>
      <CardPasswordInputContainer position={0} ref={inputRef1} />
      <CardPasswordInputContainer position={1} ref={inputRef2} />
      <CardPasswordInputContainer position={2} disabled />
      <CardPasswordInputContainer position={3} disabled />
    </>
  )
}

export default CardPasswordInputContainerList;