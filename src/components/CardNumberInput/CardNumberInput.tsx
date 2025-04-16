import styled from '@emotion/styled';
import Input from '../Input/Input';

type CardNumberInputProps = {
  values: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, idx: number) => void;
};

const StyledCardNumberInput = styled.div`
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
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`;

const CardNumberInput = ({ values, onChange }: CardNumberInputProps) => {
  return (
    <StyledCardNumberInput>
      <StyledLabel>카드 번호</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            value={value}
            onChange={(e) => onChange(e, idx)}
            maxLength={0}
            placeHolder={'1234'}
            isError={false}
          />
        ))}
      </StyledInputWrapper>
    </StyledCardNumberInput>
  );
};

export default CardNumberInput;
