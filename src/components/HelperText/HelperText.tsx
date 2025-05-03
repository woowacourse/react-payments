import { StyledHelperText } from './HelperText.styles';

export type HelperTextProps = {
  text?: string;
  type: 'isError' | 'isValid';
};

const HelperText = ({ text, type }: HelperTextProps) => {
  return <StyledHelperText type={type}>{text}</StyledHelperText>;
};

export default HelperText;
