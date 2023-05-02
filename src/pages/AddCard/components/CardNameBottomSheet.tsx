import BottomSheet from '../../../components/BottomSheet';
import CardSelectButton from './CardSelectButton';
import './CardNameBottomSheet.css';
import { CardCompany, CardNameBottomSheetProps } from '../../../type';
import { CARD_COMPANYS } from '../../../utils/constants';

const CardNameBottomSheet = ({
  isOpen,
  onToggleOpen,
  setCardCompany,
}: CardNameBottomSheetProps) => {
  const onCardSelectButtonClick = (cardCompany:CardCompany) => {
    onToggleOpen();
    setCardCompany(cardCompany);
  }

  return (
    <BottomSheet isOpen={isOpen} onToggleOpen={onToggleOpen}>
      <div className="card-name-select">
        {CARD_COMPANYS.map((cardCompany) => (
          <CardSelectButton
            key={cardCompany}
            company={cardCompany}
            onCardSelectButtonClick={() => onCardSelectButtonClick(cardCompany)}
          />
        ))}
      </div>
    </BottomSheet>
  );
};

export default CardNameBottomSheet;
