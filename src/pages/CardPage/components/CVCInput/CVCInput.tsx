import styled from '@emotion/styled';
import Input from '../../../../components/Input/Input';
import { checkInputValidation } from '../../../../validators/checkInputValidator';
import HelperText from '../../../../components/HelperText/HelperText';
import useInputValidation from '../../../../hooks/useInputValidation';
import { HandleInputParams } from '../../CardPage';
import { CVC } from '../../../../constants/settings';

type CVCInputProps = {
  values: string[];
  onChange: ({ value, idx }: HandleInputParams) => void;
};

const CVCInput = ({ values, onChange }: CVCInputProps) => {
  const { isErrorStates, errorMessage, validate } = useInputValidation(
    Array.from({ length: CVC.FIELDS_COUNT }, () => false),
    (value) => checkInputValidation(value, CVC.MAX_LENGTH)
  );

  return (
    <StyledCVCInput>
      <StyledLabel>CVC</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => onChange({ value: e.target.value, idx })}
            onBlur={(e) => validate({ value: e.target.value, idx })}
            maxLength={CVC.MAX_LENGTH}
            placeholder={CVC.PLACEHOLDER}
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
