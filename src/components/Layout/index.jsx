import { usePageContext } from 'contexts/PageContext';

import Header from 'components/@common/Header';

import { DEFAULT_PAGE } from 'constants';
import Container from './styles';

function Layout({ children }) {
  const { pageTitle, pageLocation, setPageLocation } = usePageContext();

  const onClickPreviousButton = () => setPageLocation(DEFAULT_PAGE);

  return (
    <Container>
      <Header onClickPreviousButton={pageLocation !== DEFAULT_PAGE ? onClickPreviousButton : null}>
        {pageTitle}
      </Header>
      <div className="layout-content">{children}</div>
    </Container>
  );
}

export default Layout;
