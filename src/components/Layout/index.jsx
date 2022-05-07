import Header from 'components/@common/Header';

import Container from './styles';

function Layout({ children }) {
  return (
    <Container>
      <Header>카드 추가</Header>
      <div className="layout-content">{children}</div>
    </Container>
  );
}

export default Layout;
