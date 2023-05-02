import { CardSelectButtonProps } from '../../../type';
import { CARD_NAME_IMAGE_SRCS } from '../../../utils/constants';
import './CardSelectButton.css';

const CardSelectButton = ({ onClick, company }: CardSelectButtonProps) => {
  return (
    <button className="card-select-button" onClick={onClick} name={company}>
      <img src={CARD_NAME_IMAGE_SRCS[company]} alt="bc-card" />
      <p>{company}</p>
    </button>
  );
};

export default CardSelectButton;
