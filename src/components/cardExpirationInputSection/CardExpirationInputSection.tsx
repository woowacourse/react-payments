import { CARD_FORM_INPUTS } from '../../constants/setting';
import { Input } from '../common/input/Input.styled';
import NewCardInputSection from '../newCardInputSection/NewCardInputSection';

interface CardExpirationInputSectionProps {
  cardInfo: { cardExpiration: [string, string] };
  errorMessage: { cardExpiration: [string, string] };
  handleCardExpiration: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
}

const CardExpirationInputSection: React.FC<CardExpirationInputSectionProps> = ({
  cardInfo,
  errorMessage,
  handleCardExpiration,
}) => {
  return (
    <NewCardInputSection
      label={CARD_FORM_INPUTS.CARD_EXPIRATION.LABEL}
      mainText={CARD_FORM_INPUTS.CARD_EXPIRATION.MAIN_TEXT}
      subText={CARD_FORM_INPUTS.CARD_EXPIRATION.SUB_TEXT}
      errorMessage={errorMessage.cardExpiration}
    >
      {cardInfo.cardExpiration.map((_, index) => (
        <Input
          autoFocus={index === 0}
          key={index}
          maxLength={CARD_FORM_INPUTS.CARD_EXPIRATION.MAX_LENGTH}
          placeholder={
            index === 0
              ? CARD_FORM_INPUTS.CARD_EXPIRATION.PLACEHOLDER.MONTH
              : CARD_FORM_INPUTS.CARD_EXPIRATION.PLACEHOLDER.YEAR
          }
          $isError={!!errorMessage.cardExpiration[index]}
          onChange={(event) => handleCardExpiration(event, index)}
        ></Input>
      ))}
    </NewCardInputSection>
  );
};

export default CardExpirationInputSection;
