import Styled from './TransparentInput.style';

export const TransparentInput = ({ placeholder, type, min, max, minLength, maxLength, ...props }) => {
  return (
    <Styled.TransparentInput
      placeholder={placeholder}
      type={type}
      min={min}
      max={max}
      minLength={minLength}
      maxLength={maxLength}
      styles={props}
    />
  );
};
