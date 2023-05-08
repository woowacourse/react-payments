import { useModal } from 'noah-modal';
import { Outlet } from 'react-router-dom';
import GlobalStyle, { GlobalLayout } from 'styles/globalStyle';

function App() {
  const { Modal } = useModal();

  return (
    <>
      <GlobalStyle />
      <GlobalLayout>
        <Outlet />
        {Modal && <Modal />}
      </GlobalLayout>
    </>
  );
}

export default App;
