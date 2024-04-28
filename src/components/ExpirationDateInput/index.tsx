import Label from '../common/Label';
import styled from 'styled-components';
import Input from '../common/Input';
import { CARD_META_INFO, INPUT_RULES } from '../../constants/card-app';

import { VALIDATION_MESSAGES } from '../../constants/card-app';
import { errorCaption } from '../../utils/errorCaption';

interface ExpirationDateInputProps {
  expirationDate: string[];
  expirationDateErrors: boolean[];
  onExpirationDateChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}

const ExpirationDateInput = ({
  expirationDate,
  expirationDateErrors,
  onExpirationDateChange,
}: ExpirationDateInputProps) => {
  const hasErrorInput = () => expirationDateErrors.some(Boolean);

  return (
    <InputField>
      <Label htmlFor='expiration-date'>
        {CARD_META_INFO.expirationDate.label}
      </Label>
      <InputContainer>
        {Array.from({ length: expirationDate.length }, (_, index) => (
          <Input
            key={index}
            id={`expiration-date-${index}`}
            type='text'
            placeholder={['MM', 'YY'][index]}
            value={expirationDate[index]}
            maxLength={INPUT_RULES.maxExpirationDateLength}
            size='medium'
            isError={expirationDateErrors[index]}
            onChange={(e) => onExpirationDateChange(e, index)}
            autoFocus={index === 0}
          />
        ))}
      </InputContainer>
      {hasErrorInput()
        ? errorCaption(VALIDATION_MESSAGES.invalidDate)
        : errorCaption('')}
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

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ExpirationDateInput;
