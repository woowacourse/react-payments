import React, { useState, useEffect } from "react";
import St from "./styled";

function CardPasswordInput() {
  return (
    <section>
      <St.Title>카드 비밀번호</St.Title>
      <St.Contents>
        <St.InputSection>
          <St.Input
            type="password"
            inputMode="numeric"
            maxLength={1}
          ></St.Input>
        </St.InputSection>
        <St.InputSection>
          <St.Input
            type="password"
            inputMode="numeric"
            maxLength={1}
          ></St.Input>
        </St.InputSection>
        <St.LastDigits>•</St.LastDigits>
        <St.LastDigits>•</St.LastDigits>
      </St.Contents>
    </section>
  );
}

export default CardPasswordInput;
