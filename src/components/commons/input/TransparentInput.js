import Styled from './TransparentInput.style';

export const TransparentInput = ({ styles, innerRef, ...props }) => {
  return <Styled.TransparentInput ref={innerRef} {...props} styles={styles} />;
};
