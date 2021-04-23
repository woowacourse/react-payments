import Styled from './TransparentInput.style';

export const TransparentInput = ({ placeholder, type, maxLength, ...props }) => {
  return <Styled.TransparentInput placeholder={placeholder} type={type} maxLength={maxLength} styles={props} />;
};
