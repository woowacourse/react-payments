import styled from 'styled-components';
import Label from '../common/Label';
import Input from '../common/Input';
import { CARD_META_INFO, VALIDATION_MESSAGES } from '../../constants/card-app';
import { errorCaption } from '../../utils/errorCaption';

interface CardCVCNumberInputProps {
  cardCVCNumber: string;
  cardCVCNumberError: boolean;
  onCardCVCNumberChange: (value: string) => void;
  onFocusChange: () => void;
}

const CardCVCNumberInput = ({
  cardCVCNumber,
  cardCVCNumberError,
  onCardCVCNumberChange,
  onFocusChange,
}: CardCVCNumberInputProps) => {
  return (
    <InputField>
      <Label htmlFor='card-owner'>{CARD_META_INFO.cardCVCNumber.label}</Label>
      <Input
        id='card-cvc-number'
        type='text'
        placeholder='123'
        value={cardCVCNumber}
        size='large'
        isError={cardCVCNumberError}
        onChange={(e) => {
          onCardCVCNumberChange(e.target.value);
        }}
        onFocus={onFocusChange}
        onBlur={onFocusChange}
        autoFocus
      />
      {cardCVCNumberError ? errorCaption(VALIDATION_MESSAGES.invalidCVCNumber) : errorCaption('')}
    </InputField>
  );
};

const InputField = styled.section`
  height: 77px;
  width: 315px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 16px;
  margin-bottom: 16px;
`;

export default CardCVCNumberInput;
