import './App.css';
import styled from 'styled-components';
import AddNewCardForm from './components/main-page/addNewCardForm/AddNewCardForm';
import AnnounceForm from './components/card-registration-completed-page/announceContainer/AnnounceContainer';
import { CardInfoProvider } from './components/main-page/CardInfoContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const PAGE_TITLES = {
  'Main Page': '/',
  'Add New Card': '/add-card',
  'Announce Card': '/announce',
};

const router = createBrowserRouter([
  {
    path: PAGE_TITLES['Main Page'],
    element: <AddNewCardForm />,
  },

  {
    path: PAGE_TITLES['Add New Card'],
    element: <AddNewCardForm />,
  },
  {
    path: PAGE_TITLES['Announce Card'],
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
