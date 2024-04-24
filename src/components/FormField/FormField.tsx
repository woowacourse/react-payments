import { StyledCaption, StyledFormField, StyledTitle, StyledTitleContainer } from './style';

interface FormFieldProps {
  title: string;
  caption?: string;
  children: JSX.Element;
}

const FormField = ({ title, caption, children }: FormFieldProps) => {
  return (
    <StyledFormField>
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledCaption>{caption}</StyledCaption>
      </StyledTitleContainer>
      {children}
    </StyledFormField>
  );
};

export default FormField;
