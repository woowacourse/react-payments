import { CardBrandType } from "@/constants/cardBrandType";
import S from "../style";
import React from "react";
import { CardNumberInputType } from "@/components/CardRegisterForm/components/CardNumbersField/CardNumbersField";

const CardPreviewNumbers = ({
  cardNumbers,
  cardBrandType,
}: {
  cardNumbers: CardNumberInputType;
  cardBrandType: CardBrandType | null;
}) => {
  return (
    <S.CardNumbers>
      {Object.values(cardNumbers).map((number: string, index) => {
        const isMasked = index >= 2;
        return (
          <S.Input
            $isWhite={cardBrandType !== "카카오뱅크"}
            key={index}
            type={isMasked ? "password" : "text"}
            value={number}
            readOnly
          />
        );
      })}
    </S.CardNumbers>
  );
};

const CardPreviewNumbersMemo = React.memo(CardPreviewNumbers);
export default CardPreviewNumbersMemo;
