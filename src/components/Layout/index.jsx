import { usePageContext } from 'contexts/PageContext';

import Header from 'components/@common/Header';

import Container from './styles';

function Layout({ children }) {
  const { pageTitle } = usePageContext();

  return (
    <Container>
      <Header>{pageTitle}</Header>
      <div className="layout-content">{children}</div>
    </Container>
  );
}

export default Layout;
