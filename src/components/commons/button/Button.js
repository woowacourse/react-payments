import Styled from './Button.style';

export const Button = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

Button.defaultProps = {};
