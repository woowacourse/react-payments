import styled from 'styled-components';
import Header from '../Header/Header';

type LayoutProps = {
  title: string;
  leftButton?: React.ReactNode;
};

const Layout = ({ children, title, leftButton }: React.PropsWithChildren<LayoutProps>) => {
  return (
    <Styled.Wrapper>
      <HeaderWrapper>
        {leftButton}
        <Header title={title} />
      </HeaderWrapper>
      {children}
    </Styled.Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px 0 20px;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Styled = {
  Wrapper,
  HeaderWrapper,
};
