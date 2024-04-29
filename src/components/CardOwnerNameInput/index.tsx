import styled from 'styled-components';

import Label from '../common/Label';
import Input from '../common/Input';
import { CARD_META_INFO } from '../../constants/card-app';

import { VALIDATION_MESSAGES } from '../../constants/card-app';
import { errorCaption } from '../../utils/errorCaption';

interface CardOwnerNameInputProps {
  cardOwnerName: string;
  cardOwnerNameError: boolean;
  onCardOwnerNameChange: (value: string) => void;
  onPressEnter: (value: string) => void;
}

const CardOwnerNameInput = ({
  cardOwnerName,
  cardOwnerNameError,
  onCardOwnerNameChange,
  onPressEnter,
}: CardOwnerNameInputProps) => {
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {
    if (e.key === 'Enter') {
      onPressEnter(value);
    }
  };

  return (
    <InputField>
      <Label htmlFor='card-owner'>{CARD_META_INFO.cardOwnerName.label}</Label>
      <Input
        id='card-owner'
        type='text'
        placeholder='JOHN DOE'
        value={cardOwnerName}
        size='large'
        isError={cardOwnerNameError}
        onChange={(e) => onCardOwnerNameChange(e.target.value)}
        onKeyDown={(e) => handleEnter(e, e.currentTarget.value)}
        onBlur={(e) => onPressEnter(e.target.value)}
        autoFocus
      />
      {cardOwnerNameError ? errorCaption(VALIDATION_MESSAGES.invalidOwnerName) : errorCaption('')}
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

export default CardOwnerNameInput;
