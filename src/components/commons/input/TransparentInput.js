import Styled from './TransparentInput.style';

export const TransparentInput = ({ styles, ...props }) => {
  return <Styled.TransparentInput {...props} styles={styles} />;
};
