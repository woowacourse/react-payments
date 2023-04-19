import React, { useState, useEffect } from "react";
import St from "./styled";

function CardNumberInput() {
  return (
    <section>
      <St.Title>카드 번호</St.Title>
      <St.InputSection>
        <St.Input type="text" inputMode="numeric" maxLength={4}></St.Input>
        {"-"}
        <St.Input type="text" inputMode="numeric" maxLength={4}></St.Input>
        {"-"}
        <St.Input type="password" inputMode="numeric" maxLength={4}></St.Input>
        {"-"}
        <St.Input type="password" inputMode="numeric" maxLength={4}></St.Input>
      </St.InputSection>
    </section>
  );
}

export default CardNumberInput;
