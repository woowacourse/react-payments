import CardPreviewBack from "./CardPreviewBack/CardPreviewBack";
import CardPreviewFront from "./CardPreviewFront/CardPreviewFront";

interface Props {
  // cardInformation: CardInformation;
  cardNumbers: string[];
  cardCompany: string;
  cardExpirationMonth: string;
  cardExpirationYear: string;
  cardOwnerName: string;
  cardCVC: string;
  previewStatus: "front" | "back";
}

export default function CardPreview({
  cardNumbers,
  cardCompany,
  cardExpirationMonth,
  cardExpirationYear,
  cardOwnerName,
  cardCVC,
  previewStatus,
}: Props) {
  return (
    <>
      {previewStatus === "front" && (
        <CardPreviewFront
          cardNumbers={cardNumbers}
          cardCompany={cardCompany}
          cardExpirationMonth={cardExpirationMonth}
          cardExpirationYear={cardExpirationYear}
          cardOwnerName={cardOwnerName}
        />
      )}
      {previewStatus === "back" && <CardPreviewBack cardCVC={cardCVC} />}
    </>
  );
}
