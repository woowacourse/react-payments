import { StyledInput } from './style';

const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};

export default Input;
