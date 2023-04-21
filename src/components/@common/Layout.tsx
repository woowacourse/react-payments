import styled from 'styled-components';
import Header from './Header';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const pathname = useLocation().pathname;

  let headingText = '';
  let hasBackButton = false;

  switch (pathname) {
    case '/card-list':
      headingText = '보유카드';
      hasBackButton = false;
      break;
    case '/card-register':
      headingText = '카드 추가';
      hasBackButton = true;
  }

  return (
    <LayoutContainer>
      <Header headingText={headingText} backButton={hasBackButton} />
      {children}
    </LayoutContainer>
  );
}

export default Layout;

const LayoutContainer = styled.div`
  width: 375px;

  margin: 22px auto;
  padding: 0 24px;
`;
