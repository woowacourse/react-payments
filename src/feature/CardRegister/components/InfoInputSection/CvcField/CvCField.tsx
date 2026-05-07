import Label from '../../../../../common/components/Label/Label';
import Input from '../../../../../common/components/Input/Input';
import styled from 'styled-components';
import useFieldValidation from '../../../../../common/hooks/useFieldValidation';
import { isWithinMaxLength, isNumeric } from '../../../utils/validator';
import {
  CVC_LENGTH,
  validateCvcNumber,
} from '../../../utils/cardFormValidator';

const CvcField = ({
  cvcNumber,
  setCvcNumber,
}: {
  cvcNumber: string;
  setCvcNumber: (value: string) => void;
}) => {
  const { firstErrorIndex, errorMessage, touch } = useFieldValidation({
    values: [cvcNumber],
    validate: validateCvcNumber,
  });

  const handleCvcNumberChange = (eValue: string) => {
    const value = eValue.trim();

    if (!isNumeric(value)) return;
    if (!isWithinMaxLength(value, CVC_LENGTH)) return;

    setCvcNumber(value);
  };

  const handleCvcBlur = (index: number) => {
    touch(index);
  };

  return (
    <StyledField>
      <Label value="CVC" />
      <InputWrapper>
        <CvcInput
          value={cvcNumber}
          maxLength={3}
          inputMode="numeric"
          placeholder="123"
          strokeMode={0 === firstErrorIndex ? 'error' : 'default'}
          onChange={(e) => handleCvcNumberChange(e.target.value)}
          onBlur={() => handleCvcBlur(0)}
        />
      </InputWrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </StyledField>
  );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 12px;

  width: 100%;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
`;

const CvcInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

const ErrorMessage = styled.span`
  min-height: 20px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;

export default CvcField;
