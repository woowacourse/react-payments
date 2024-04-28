import { CardNumberInputType } from "../CardRegisterForm/components/CardNumbersField/CardNumbersField";
import { ExpirationPeriodInputType } from "../CardRegisterForm/components/ExpirationPeriodField/ExpirationPeriodField";
import CardPreviewBack from "./components/CardPreviewBack";
import CardPreviewFront from "./components/CardPreviewFront";
import S from "./style";
import { CardBrandType } from "@/constants/cardBrandType";

interface FrontProps {
  cardBrandType: CardBrandType | null;
  cardNumbers: CardNumberInputType;
  expirationDate: ExpirationPeriodInputType;
  ownerName: string | null;
  CVCNumbers: string;
  isFront: boolean;
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>;
}

interface BackProps {
  CVCNumbers: string;
}

const CardPreview = ({
  expirationDate,
  ownerName,
  cardNumbers,
  cardBrandType,
  CVCNumbers,
  isFront,
  setIsFront,
}: FrontProps & BackProps) => {
  const onFlipCard = () => {
    setIsFront((prev) => !prev);
  };

  return (
    <S.CardWrapper>
      <S.CardOuter $isFront={isFront} onClick={onFlipCard}>
        <CardPreviewFront
          cardBrandType={cardBrandType}
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
