import BottomSheet from '../../../components/BottomSheet';
import CardSelectButton from './CardSelectButton';
import './CardNameBottomSheet.css';
import { CardNameBottomSheetProps } from '../../../type';
import { CARD_COMPANYS } from '../../../utils/constants';

const CardNameBottomSheet = ({
  isOpen,
  onToggleOpen,
  setCardCompany,
}: CardNameBottomSheetProps) => {
  // TODO: onClick 함수 분리
  return (
    <BottomSheet isOpen={isOpen} onToggleOpen={onToggleOpen}>
      <div className="card-name-select">
        {CARD_COMPANYS.map((cardCompany) => (
          <CardSelectButton
            key={cardCompany}
            company={cardCompany}
            onClick={() => {
              onToggleOpen();
              setCardCompany(cardCompany);
            }}
          />
        ))}
      </div>
    </BottomSheet>
  );
};

export default CardNameBottomSheet;
