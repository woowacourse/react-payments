import { CardCompany } from '../../../type';
import { CARD_NAME_IMAGE_SRCS } from '../../../utils/constants';
import './CardSelectButton.css';

type CardSelectButtonProps = {
  cardName: CardCompany;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const CardSelectButton = ({ onClick, cardName }: CardSelectButtonProps) => {
  return (
    <button className="card-select-button" onClick={onClick} name={cardName}>
      <img src={CARD_NAME_IMAGE_SRCS[cardName]} alt="bc-card" />
      <p>{cardName}</p>
    </button>
  );
};

export default CardSelectButton;
