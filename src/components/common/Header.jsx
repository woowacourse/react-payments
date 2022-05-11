import styled from 'styled-components';

function Header({ children, title, ...props }) {
  return (
    <Styled.Root {...props}>
      {children}
      <Styled.Title>{title}</Styled.Title>
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 25px;
  `,

  Title: styled.h1`
    font-size: 16px;
    font-weight: normal;
    margin-left: 18px;
  `,
};

export default Header;
