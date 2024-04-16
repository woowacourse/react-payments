import styled from 'styled-components';
import PaymentsFormTitle from './PaymentsFormTitle';
import PaymentsInputForm from './PaymentsInputForm';

interface PaymentsFormSectionProps {
  formTitleProps: PaymentsFormTitleProps;
  inputFormProps: PaymentsInputFormProps;
}

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PaymentsFormSection = ({ ...props }: PaymentsFormSectionProps) => {
  return (
    <FormSection>
      <PaymentsFormTitle
        title={props.formTitleProps.title}
        subTitle={props.formTitleProps.subTitle}
      />
      <PaymentsInputForm
        label={props.inputFormProps.label}
        hasError={props.inputFormProps.hasError}
        errorMessage={props.inputFormProps.errorMessage}
        inputFieldProps={props.inputFormProps.inputFieldProps}
      />
    </FormSection>
  );
};

export default PaymentsFormSection;
