import styled from '@emotion/styled';
import Input from '../../../../components/Input/Input';
import { checkInputValidation } from '../../../../validators/checkInputValidator';
import HelperText from '../../../../components/HelperText/HelperText';
import useInputValidation from '../../../../hooks/useInputValidation';
import { HandleInputParams } from '../../CardPage';

type CVCInputProps = {
  values: string[];
  onChange: ({ value, idx }: HandleInputParams) => void;
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
  const { isErrorStates, errorMessage, validate } = useInputValidation([false], (value) =>
    checkInputValidation(value, 3)
  );

  return (
    <StyledCVCInput>
      <StyledLabel>CVC</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            value={value}
            onChange={(e) => onChange({ value: e.target.value, idx })}
            onBlur={(e) => validate({ value: e.target.value, idx })}
            maxLength={3}
            placeholder={'123'}
            isError={isErrorStates[idx]}
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
