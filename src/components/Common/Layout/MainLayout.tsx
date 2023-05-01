import styled from 'styled-components';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return <StyledMainLayout>{children}</StyledMainLayout>;
}

const StyledMainLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainLayout;
