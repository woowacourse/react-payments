import styled from '@emotion/styled';
import Input from '../../../../components/Input/Input';
import HelperText from '../../../../components/HelperText/HelperText';
import { HandleInputParams } from '../../CardPage';
import { EXPIRATION_DATE } from '../../../../constants/settings';
import useExpirationDateValidation from '../../../../hooks/useExpirationDateValidation';

type ExpirationDateInputProps = {
  values: string[];
  onChange: ({ value, idx }: HandleInputParams) => void;
};

const ExpirationDateInput = ({ values, onChange }: ExpirationDateInputProps) => {
  const { isErrorStates, errorMessage, checkValidExpirationDate } =
    useExpirationDateValidation(values);

  return (
    <StyledExpirationDateInput>
      <StyledLabel>유효기간</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => onChange({ value: e.target.value, idx })}
            onBlur={(e) => checkValidExpirationDate({ value: e.target.value, idx })}
            maxLength={EXPIRATION_DATE.MAX_LENGTH}
            placeholder={EXPIRATION_DATE.PLACEHOLDER[idx]}
            isError={isErrorStates[idx]}
          />
        ))}
      </StyledInputWrapper>
      <StyledHelperTextWrapper>
        {errorMessage.length > 0 && <HelperText text={errorMessage} type={'isError'}></HelperText>}
      </StyledHelperTextWrapper>
    </StyledExpirationDateInput>
  );
};

export default ExpirationDateInput;

const StyledExpirationDateInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
`;

const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const StyledHelperTextWrapper = styled.div`
  height: 30px;
`;
