import { Routes, Route } from 'react-router-dom';
import CardNameRegistration from './Pages/CardNameRegistration';
import CardRegistration from './Pages/CardRegistration';
import Home from './Pages/Home';
import { PAGE_PATH } from './constants';
import { CardInformationProvider } from './context/CardInformationProvider';
import { CardListProvider } from './context/CardListProvider';

const { HOME, FORM_REGISTRATION, NAME_REGISTRATION } = PAGE_PATH;

function App() {
  return (
    <CardListProvider>
      <CardInformationProvider>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={FORM_REGISTRATION} element={<CardRegistration />} />
          <Route path={NAME_REGISTRATION} element={<CardNameRegistration />} />
        </Routes>
      </CardInformationProvider>
    </CardListProvider>
  );
}

export default App;
