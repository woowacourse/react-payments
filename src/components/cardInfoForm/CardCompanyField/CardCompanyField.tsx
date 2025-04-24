import Dropdown from '../../common/DropDown/Dropdown';
import { CardCompanyName } from '../../../hooks/useCardCompany';

interface CardCompanyFieldProps {
  selectedCard: CardCompanyName | null;
  CARD_COMPANY_NAMES: readonly CardCompanyName[];
  CARD_COMPANY_PLACEHOLDER: string;
  onClickCardCompany: (name: CardCompanyName) => void;
}

function CardCompanyField({
  selectedCard,
  CARD_COMPANY_NAMES,
  CARD_COMPANY_PLACEHOLDER,
  onClickCardCompany,
}: CardCompanyFieldProps) {
  return (
    <Dropdown<CardCompanyName>
      placeholder={CARD_COMPANY_PLACEHOLDER}
      items={[...CARD_COMPANY_NAMES]}
      selectedValue={selectedCard}
      onClick={onClickCardCompany}
    />
  );
}

export default CardCompanyField;
