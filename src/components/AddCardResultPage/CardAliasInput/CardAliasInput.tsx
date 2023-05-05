import React, { useEffect } from "react";
import St from "./CardAliasInputStyled";
import useCardAlias from "hooks/card/useCardAlias";
import useInputRef from "hooks/useInputRef";

function CardAliasInput() {
  const { cardAlias, changeCardAlias } = useCardAlias();
  const { inputRef } = useInputRef();

  useEffect(() => {
    inputRef.current?.setCustomValidity(
      cardAlias ? "" : "10자 이내의 별칭을 입력해주세요."
    );
  }, [cardAlias]);

  return (
    <St.CardAlias
      type="text"
      value={cardAlias || ""}
      maxLength={10}
      required
      placeholder="카드 별칭"
      ref={inputRef}
      onChange={changeCardAlias}
    />
  );
}

export default CardAliasInput;
