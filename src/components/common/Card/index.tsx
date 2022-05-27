import React from "react";

import type { CardNumbers } from "types";

import { Span } from "../styled";
import {
  CardBottom,
  CardBox,
  CardChip,
  CardHeader,
  CardInfo,
  CardNumber,
  CardParagraph,
} from "./styled";

interface CardProps {
  large: boolean | undefined;
  cardCompany: { hexColor: string; name: string };
  cardNumbers: CardNumbers;
  cardOwner: { name: string };
  cardDate: { month: string; year: string };
}

const convertToCardNumberString = ({
  cardNoA,
  cardNoB,
  cardNoC,
  cardNoD,
}: CardNumbers) =>
  `${cardNoA} ${cardNoB} ${"*".repeat(cardNoC.length)} ${"*".repeat(
    cardNoD.length
  )}`;

function Card({
  large,
  cardCompany: { hexColor, name },
  cardNumbers,
  cardOwner,
  cardDate: { month, year },
}: CardProps) {
  return (
    <CardBox hexColor={hexColor} large={large} data-testid="card">
      <CardHeader>
        <Span>{name}</Span>
      </CardHeader>
      <CardChip />
      <CardBottom>
        <CardNumber>
          <Span>{convertToCardNumberString(cardNumbers)}</Span>
        </CardNumber>
        <CardInfo>
          <CardParagraph width="120">{cardOwner.name || "NAME"}</CardParagraph>
          <CardParagraph width="auto">{`${month || "MM"} / ${
            year || "YY"
          }`}</CardParagraph>
        </CardInfo>
      </CardBottom>
    </CardBox>
  );
}

export default Card;
