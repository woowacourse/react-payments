import * as Styled from './CardNumbers.styled';
import { CARD_NUMBERS_MASKING } from '../../constants/setting';

export interface CardNumberProps {
  cardNumbers: string[];
}

const CardNumbers = ({ cardNumbers }: CardNumberProps) => {
  return (
    <Styled.CardNumbersSection>
      {cardNumbers.map((cardNumber, index) => {
        const isValidNumber =
          cardNumber !== '' && !Number.isNaN(Number(cardNumber));
        const maskedNumber = isValidNumber
          ? CARD_NUMBERS_MASKING.repeat(cardNumber.toString().length)
          : null;

        return (
          <div key={index}>
            {index > 1 ? maskedNumber : isValidNumber && cardNumber}
          </div>
        );
      })}
    </Styled.CardNumbersSection>
  );
};

export default CardNumbers;
