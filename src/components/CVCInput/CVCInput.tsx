import styled from '@emotion/styled';
import Input from '../Input/Input';

type CVCInputProps = {
  values: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, idx: number) => void;
};

const StyledCVCInput = styled.div`
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
  grid-template-columns: repeat(1, 1fr);
  gap: 5px;
`;

const CVCInput = ({ values, onChange }: CVCInputProps) => {
  return (
    <StyledCVCInput>
      <StyledLabel>CVC</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            value={value}
            onChange={(e) => onChange(e, idx)}
            maxLength={3}
            placeHolder={'123'}
            isError={false}
          />
        ))}
      </StyledInputWrapper>
    </StyledCVCInput>
  );
};

export default CVCInput;
