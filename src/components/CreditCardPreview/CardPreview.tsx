import { useState } from "react";
import CardPreviewFront from "./CardPreviewFront";
import CardPreviewBack from "./CardPreviewBack";
import { CardType } from "@/constants/cardType";
import { CardNumberInputType } from "../CardRegisterForm/components/CardNumbersField/CardNumbersField";
import { ExpirationPeriodInputType } from "../CardRegisterForm/components/ExpirationPeriodField/ExpirationPeriodField";
import S from "./style";

interface FrontProps {
  cardType: CardType | null;
  cardNumbers: CardNumberInputType;
  expirationDate: ExpirationPeriodInputType;
  ownerName: string | null;
  CVCNumbers: string;
  isFrontShow: boolean;
}

interface BackProps {
  CVCNumbers: string;
}

const CardPreview = ({
  expirationDate,
  ownerName,
  cardNumbers,
  cardType,
  CVCNumbers,
  isFrontShow,
}: FrontProps & BackProps) => {
  const [isFront, setIsFront] = useState(isFrontShow);

  const onFlipCard = () => {
    setIsFront((prev) => !prev);
  };

  return (
    <S.CardWrapper>
      <S.CardOuter $isFront={isFront} onClick={onFlipCard}>
        <CardPreviewFront
          cardType={cardType}
          expirationDate={expirationDate}
          ownerName={ownerName}
          cardNumbers={cardNumbers}
        />
        <CardPreviewBack CVCNumbers={CVCNumbers} />
      </S.CardOuter>
    </S.CardWrapper>
  );
};

export default CardPreview;
