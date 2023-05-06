import styled from 'styled-components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutWrapper>
      <LayoutContent>{children}</LayoutContent>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const LayoutContent = styled.div`
  width: 360px;
  margin: 40px 0;
  height: 100%;
  border-radius: 12px;
  padding: 0 40px 40px 40px;
  background-color: #fff;
  overflow-y: auto;

  @media screen and (max-width: 360px) {
    width: 280px;
  }
`;

export default Layout;
