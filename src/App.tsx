import { Outlet } from 'react-router-dom';
import GlobalStyle, { GlobalLayout } from 'style/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalLayout>
        <Outlet />
      </GlobalLayout>
    </>
  );
}

export default App;
