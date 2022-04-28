import React, { useEffect, useRef } from "react";
import { useAppState } from "../../../hooks/hooks";
import CardPasswordInputContainer from "./CardPasswordInputContainer";

function CardPasswordInputContainerList() {
  const { password } = useAppState();

  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 첫번째 필드에 값이 비었다면
    !password[0] && inputRef1.current?.focus();
    // 첫번째 필드는 값이 있고 두번째 필드에 값이 비었다면
    (password[0] && !password[1]) && inputRef2.current?.focus();
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