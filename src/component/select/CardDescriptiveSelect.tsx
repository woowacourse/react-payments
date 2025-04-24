import Description from '../Description';
import CardLabeledSelect from './CardLabeledSelect';
import CARD_LABEL_INPUT_CONFIG from '../../constants/cardLabeledInputConfig';
import DESCRIPTION_TEXT from '../../constants/descriptionText';
import type { CardInputProps } from '../../types/CardInputTypes';

interface CardDescriptiveSelectProps {
  cardInput: CardInputProps;
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
}

const CardDescriptiveSelect = ({ cardInput, handleCardInput }: CardDescriptiveSelectProps) => {
  return (
    <>
      <Description headText={DESCRIPTION_TEXT.cardBrand.headText} detailText={DESCRIPTION_TEXT.cardBrand.detailText} />
      <CardLabeledSelect
        config={CARD_LABEL_INPUT_CONFIG.cardBrand}
        value={cardInput.cardBrand}
        handleCardInput={handleCardInput}
      />
    </>
  );
};

export default CardDescriptiveSelect;
