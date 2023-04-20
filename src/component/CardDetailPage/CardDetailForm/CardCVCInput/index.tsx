import React, { useState, useEffect } from "react";
import St from "./styled";

type CardCVCInputProps = {
  changeCardCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardCVC: string;
};
function CardCVCInput({ changeCardCVC, cardCVC }: CardCVCInputProps) {
  return (
    <section>
      <St.Title>보안 코드(CVC/CVV)</St.Title>
      <St.Contents>
        <St.InputSection>
          <St.Input
            type="password"
            value={cardCVC}
            onInput={changeCardCVC}
          ></St.Input>
        </St.InputSection>
        <St.Button>?</St.Button>
      </St.Contents>
    </section>
  );
}

export default CardCVCInput;
