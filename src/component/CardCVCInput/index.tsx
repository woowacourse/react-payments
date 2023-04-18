import React, { useState, useEffect } from "react";
import St from "./styled";

function CardCVCInput() {
  return (
    <>
      <St.Title>보안 코드(CVC/CVV)</St.Title>
      <St.Contents>
        <St.InputSection>
          <St.Input
            type="password"
            inputMode="numeric"
            maxLength={3}
          ></St.Input>
        </St.InputSection>
        <St.Button>?</St.Button>
      </St.Contents>
    </>
  );
}

export default CardCVCInput;
