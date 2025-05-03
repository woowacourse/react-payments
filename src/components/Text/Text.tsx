import { StyledText } from './Text.styles';

export type TextProps = {
  text?: string;
  type: 'title' | 'subTitle';
};

const Text = ({ text, type }: TextProps) => {
  return <StyledText type={type}>{text}</StyledText>;
};

export default Text;
