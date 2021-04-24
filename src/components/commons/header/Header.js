import Styled from './Header.style';

export const Header = ({ children, styles, ...props }) => {
  return (
    <Styled.Header {...props} styles={styles}>
      {children}
    </Styled.Header>
  );
};
