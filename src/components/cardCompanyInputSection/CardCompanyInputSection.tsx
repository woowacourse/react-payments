import { CARD_FORM_INPUTS } from '../../constants/setting';
import Select from '../common/select/Select';
import NewCardInputSection from '../newCardInputSection/NewCardInputSection';

interface CardCompanyInputSectionProps {
  cardInfo: { cardCompany: string };
  handleCardCompany: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CardCompanyInputSection: React.FC<CardCompanyInputSectionProps> = ({
  cardInfo,
  handleCardCompany,
}) => {
  return (
    <NewCardInputSection
      label={CARD_FORM_INPUTS.CARD_COMPANY.LABEL}
      mainText={CARD_FORM_INPUTS.CARD_COMPANY.MAIN_TEXT}
      subText={CARD_FORM_INPUTS.CARD_COMPANY.SUB_TEXT}
    >
      <Select
        options={CARD_FORM_INPUTS.CARD_COMPANY.OPTIONS}
        onChange={handleCardCompany}
        value={cardInfo.cardCompany}
        defaultValue={CARD_FORM_INPUTS.CARD_COMPANY.OPTIONS[0]}
      />
    </NewCardInputSection>
  );
};

export default CardCompanyInputSection;
