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
      </div>
    </>
  );
};

export default CardPreview;
