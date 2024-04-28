import * as Styled from './style';

interface FormFieldProps {
  title: string;
  caption?: string;
  children: JSX.Element;
}

const FormField = ({ title, caption, children }: FormFieldProps) => {
  return (
    <Styled.FormField>
      <Styled.TitleContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Caption>{caption}</Styled.Caption>
      </Styled.TitleContainer>
      {children}
    </Styled.FormField>
  );
};

export default FormField;
