import * as Form from './style';

interface FormFieldProps {
  title: string;
  caption?: string;
  children: JSX.Element;
}

const FormField = ({ title, caption, children }: FormFieldProps) => {
  return (
    <Form.Field>
      <Form.TitleContainer>
        <Form.Title>{title}</Form.Title>
        <Form.Caption>{caption}</Form.Caption>
      </Form.TitleContainer>
      {children}
    </Form.Field>
  );
};

export default FormField;
