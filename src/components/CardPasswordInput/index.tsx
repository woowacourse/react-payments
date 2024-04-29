import styled from 'styled-components';
import { CARD_META_INFO, VALIDATION_MESSAGES } from '../../constants/card-app';
import Label from '../common/Label';
import Input from '../common/Input';
import { errorCaption } from '../../utils/errorCaption';

interface CardPasswordInputProps {
  cardPassword: string;
  cardPasswordError: boolean;
  onCardPasswordChange: (value: string) => void;
}

const CardPasswordInput = ({ cardPassword, cardPasswordError, onCardPasswordChange }: CardPasswordInputProps) => {
  return (
    <InputField>
      <Label htmlFor='card-password'>{CARD_META_INFO.cardPassword.label}</Label>
      <Input
        id='card-password'
        type='password'
        placeholder='••'
        value={cardPassword}
        size='large'
        isError={cardPasswordError}
        onChange={(e) => {
          onCardPasswordChange(e.target.value);
        }}
        autoFocus
      />
      {cardPasswordError ? errorCaption(VALIDATION_MESSAGES.invalidPassword) : errorCaption('')}
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

export default CardPasswordInput;
