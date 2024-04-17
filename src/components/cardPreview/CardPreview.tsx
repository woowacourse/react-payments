import { ICardInfo } from "../../types/type";

interface Props {
  cardInfo: ICardInfo;
}

const CardPreview = ({ cardInfo }: Props) => {
  return (
    <>
      <div>
        {cardInfo.cardNumbers.map((cardNumber, index) => {
          const cardNumberLength = cardNumber.toString().length;
          if (index > 1) {
            return <span key={index}>{cardNumber !== 0 && "●".repeat(cardNumberLength)}</span>;
          }
          return <span key={index}>{cardNumber !== 0 && cardNumber}</span>;
        })}
        <div>
          {cardInfo.cardExpiration["month"] !== 0 && cardInfo.cardExpiration["month"] + "/"}
          {cardInfo.cardExpiration["year"] !== 0 && cardInfo.cardExpiration["year"]}
        </div>
      </div>
    </>
  );
};

export default CardPreview;
