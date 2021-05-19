import CircleButton from "../../components/CircleButton/CircleButton";
import useCardCompany from "../../hooks/useCardCompany";
import { getCardColor } from "../../utils/cardCompany";

const CardCompanyButton = ({ className, onCardCompanySelect, cardCompany }) => {
  const { setCardCompanyState } = useCardCompany();

  const onClick = () => {
    setCardCompanyState(cardCompany);
    onCardCompanySelect();
  };

  return (
    <CircleButton
      className={className}
      buttonText={cardCompany}
      circleColor={getCardColor(cardCompany)}
      onClick={onClick}
    />
  );
};

export default CardCompanyButton;
