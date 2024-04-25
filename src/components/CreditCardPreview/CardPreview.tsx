import { useEffect, useState } from "react";
import CardPreviewFront from "./CardPreviewFront";
import CardPreviewBack from "./CardPreviewBack";
import { CardType } from "@/constants/cardType";
import { CardNumberInputType } from "../CardRegisterForm/components/CardNumbersField/CardNumbersField";
import { ExpirationPeriodInputType } from "../CardRegisterForm/components/ExpirationPeriodField/ExpirationPeriodField";

interface FrontProps {
  cardType: CardType | null;
  cardNumbers: CardNumberInputType;
  expirationDate: ExpirationPeriodInputType;
  ownerName: string | null;
  CVCNumbers: string;
  step: number;
}

interface BackProps {
  CVCNumbers: string;
  step: number;
}

const CardPreview = ({
  expirationDate,
  ownerName,
  cardNumbers,
  cardType,
  CVCNumbers,
  step,
}: FrontProps & BackProps) => {
  const [isFront, setIsFront] = useState(true);

  useEffect(() => {
    if (step === 5) {
      setIsFront(false);
    } else {
      setIsFront(true);
    }
  }, [step]);

  return isFront ? (
    <CardPreviewFront
      cardType={cardType}
      expirationDate={expirationDate}
      ownerName={ownerName}
      cardNumbers={cardNumbers}
    />
  ) : (
    <CardPreviewBack CVCNumbers={CVCNumbers} />
  );
};

export default CardPreview;
