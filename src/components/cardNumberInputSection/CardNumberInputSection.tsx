import { CARD_FORM_INPUTS } from '../../constants/setting';
import { Input } from '../common/input/Input.styled';
import NewCardInputSection from '../newCardInputSection/NewCardInputSection';

interface CardNumberInputSectionProps {
  cardInfo: { cardNumbers: string[] };
  errorMessage: { cardNumbers: string[] };
  handleCardNumbers: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
}

const CardNumberInputSection: React.FC<CardNumberInputSectionProps> = ({
  cardInfo,
  errorMessage,
  handleCardNumbers,
  inputRefs,
}) => {
  return (
    <NewCardInputSection
      label={CARD_FORM_INPUTS.CARD_NUMBERS.LABEL}
      mainText={CARD_FORM_INPUTS.CARD_NUMBERS.MAIN_TEXT}
      subText={CARD_FORM_INPUTS.CARD_NUMBERS.SUB_TEXT}
      errorMessage={errorMessage.cardNumbers}
    >
      {cardInfo.cardNumbers.map((_, index) => (
        <Input
          key={index}
          maxLength={CARD_FORM_INPUTS.CARD_NUMBERS.MAX_LENGTH}
          placeholder={CARD_FORM_INPUTS.CARD_NUMBERS.PLACEHOLDER}
          $isError={!!errorMessage.cardNumbers[index]}
          onChange={(event) => handleCardNumbers(event, index)}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </NewCardInputSection>
  );
};

export default CardNumberInputSection;
