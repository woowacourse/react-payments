import styled from '@emotion/styled';
import Input from '../Input/Input';

type ExpirationDateInputProps = {
  values: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, idx: number) => void;
};

const StyledExpirationDateInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
`;

const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;

const ExpirationDateInput = ({ values, onChange }: ExpirationDateInputProps) => {
  const placeHolders = ['MM', 'YY'];
  return (
    <StyledExpirationDateInput>
      <StyledLabel>유효기간</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            value={value}
            onChange={(e) => onChange(e, idx)}
            maxLength={2}
            placeHolder={placeHolders[idx]}
            isError={false}
          />
        ))}
      </StyledInputWrapper>
    </StyledExpirationDateInput>
  );
};

export default ExpirationDateInput;
