import './App.css';
import styled from 'styled-components';
import AddNewCardForm from './components/main-page/addNewCardForm/AddNewCardForm';
import AnnounceForm from './components/card-registration-completed-page/announceForm/AnnounceForm';
import { CardInfoProvider } from './components/main-page/CardInfoContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AddNewCardForm />,
  },

  {
    path: '/add-card',
    element: <AddNewCardForm />,
  },
  {
    path: '/announce',
    element: <AnnounceForm />,
  },
]);

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <CardInfoProvider>
      <StyledApp>
        <RouterProvider router={router} />
      </StyledApp>
    </CardInfoProvider>
  );
}

export default App;
