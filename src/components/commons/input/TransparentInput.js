import Styled from './TransparentInput.style';

export const TransparentInput = ({ placeholder, type, minLength, maxLength, ...props }) => {
  return (
    <Styled.TransparentInput
      placeholder={placeholder}
      type={type}
      minLength={minLength}
      maxLength={maxLength}
      styles={props}
    />
  );
};
