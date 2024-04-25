import { useEffect, useState } from "react";
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

  const onFlipCard = () => {
    setIsFront((prev) => !prev);
  };
  //TODO: 스텝별로 상수화하기
  useEffect(() => {
    if (step === 5) {
      setIsFront(false);
    } else {
      setIsFront(true);
    }
  }, [step]);

  return (
    <S.CardWrapper>
      <S.CardOuter isFront={isFront} onClick={onFlipCard}>
        {/* {isFront ? ( */}
        <CardPreviewFront
          cardType={cardType}
          expirationDate={expirationDate}
          ownerName={ownerName}
          cardNumbers={cardNumbers}
        />
        {/* ) : ( */}
        <CardPreviewBack CVCNumbers={CVCNumbers} />
        {/* )} */}
      </S.CardOuter>
    </S.CardWrapper>
  );
};

export default CardPreview;
