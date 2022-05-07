import styled from 'styled-components';

function Header({ children, title }) {
  const path = location.pathname;

  return (
    <Styled.Root>
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

  Title: styled.span`
    font-size: 16px;
    margin-left: 18px;
  `,
};

export default Header;
