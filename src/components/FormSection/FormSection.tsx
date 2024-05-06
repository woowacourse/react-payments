import PaymentsFormTitle from '../common/PaymentsFormTitle/PaymentsFormTitle';
import * as Styled from './FormSection.styled'

interface FormSectionProps {
  title: string
  subTitle?: string
  label: string
  errorMessage: string
  Children: JSX.Element
}

const FormSection = ({ title, subTitle, label, errorMessage, Children }: FormSectionProps) => (
  <Styled.FormSection>
    <PaymentsFormTitle title={title} subTitle={subTitle} />
    <Styled.InputForm>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputFieldContainer className="input-field-container">
        {Children}
      </Styled.InputFieldContainer>
      <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
    </Styled.InputForm>
  </Styled.FormSection>
);

export default FormSection;
