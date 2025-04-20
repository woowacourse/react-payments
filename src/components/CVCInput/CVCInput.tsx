import styled from '@emotion/styled';
import Input from '../Input/Input';
import { HandleInputParams } from '../CardPage/CardPage';
import { inputValidation } from '../../validators/inputValidator';
import HelperText from '../HelperText/HelperText';
import useInputValidation from '../../hooks/useInputValidation';

type CVCInputProps = {
  values: string[];
  onChange: ({ e, idx }: HandleInputParams) => void;
};

const StyledCVCInput = styled.div`
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
  grid-template-columns: repeat(1, 1fr);
  gap: 5px;
`;

const StyledHelperTextWrapper = styled.div`
  height: 30px;
`;

const CVCInput = ({ values, onChange }: CVCInputProps) => {
  const { isError, errorMessage, validate } = useInputValidation([false], (e) =>
    inputValidation(e, 3)
  );

  return (
    <StyledCVCInput>
      <StyledLabel>CVC</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => onChange({ e, idx })}
            onBlur={(e) => validate({ e, idx })}
            maxLength={3}
            placeholder={'123'}
            isError={isError[idx]}
          />
        ))}
      </StyledInputWrapper>
      <StyledHelperTextWrapper>
        {errorMessage.length > 0 && <HelperText text={errorMessage} type={'isError'}></HelperText>}
      </StyledHelperTextWrapper>
    </StyledCVCInput>
  );
};

export default CVCInput;
