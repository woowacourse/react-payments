import styled from 'styled-components';
import PaymentsInputField from './PaymentsInputField';

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 315px;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
`;

const InputFieldContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

const ErrorMessage = styled.div`
  color: #ff3d3d;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
`;

const PaymentsInputForm = ({ ...props }: PaymentsInputFormProps) => {
  return (
    <InputForm>
      <Label>{props.label}</Label>
      <InputFieldContainer className="input-field-container">
        {props.inputFieldProps.map(
          (inputFieldProp: PaymentsInputFieldProps) => {
            return (
              <PaymentsInputField
                placeholder={inputFieldProp.placeholder}
                maxLength={inputFieldProp.maxLength}
                hasError={inputFieldProp.hasError}
              />
            );
          },
        )}
      </InputFieldContainer>
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </InputForm>
  );
};

export default PaymentsInputForm;
