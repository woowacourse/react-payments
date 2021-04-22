import Styled from './TransparentInput.style';

export const TransparentInput = ({ placeholder, type, ...props }) => {
  return <Styled.TransparentInput placeholder={placeholder} type={type} styles={props} />;
};
