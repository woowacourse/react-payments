import { Outlet } from 'react-router-dom';
import GlobalStyle, { GlobalLayout } from 'style/globalStyle';

function AppLayout() {
  return (
    <>
      <GlobalStyle />
      <GlobalLayout>
        <Outlet />
      </GlobalLayout>
    </>
  );
}

export default AppLayout;
