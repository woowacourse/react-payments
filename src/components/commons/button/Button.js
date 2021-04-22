import Styled from './Button.style';

export const Button = ({ children, ...props }) => {
  return <Styled.Button styles={props}>{children}</Styled.Button>;
};
