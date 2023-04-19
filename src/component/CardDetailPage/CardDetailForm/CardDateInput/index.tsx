import React, { useState, useEffect } from "react";
import St from "./styled";

function CardDateInput() {
  return (
    <section>
      <St.Title>만료일</St.Title>
      <St.InputSection>
        <St.Input
          type="text"
          inputMode="numeric"
          maxLength={2}
          placeholder="MM"
        ></St.Input>
        {"/"}
        <St.Input
          type="text"
          inputMode="numeric"
          maxLength={2}
          placeholder="YY"
        ></St.Input>
      </St.InputSection>
    </section>
  );
}

export default CardDateInput;
