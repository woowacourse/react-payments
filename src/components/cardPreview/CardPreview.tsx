import { ICardInfo } from "../../types/type";

interface Props {
  cardInfo: ICardInfo;
}

const CardPreview = ({ cardInfo }: Props) => {
  return (
    <>
      <div>
        {cardInfo.cardNumbers.map((cardNumber, index) => {
          return <span key={index}>{cardNumber !== 0 && cardNumber}</span>;
        })}
      </div>
    </>
  );
};

export default CardPreview;
