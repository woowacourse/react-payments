import { Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { PATH } from './constants';
import './styles/App.css';
import './styles/global.css';
import './styles/reset.css';
import { CardEnrollmentConfirmation, CardEnrollmentPage, Home } from './pages';
import NonePage from './pages/NonePage/index';

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={PATH.cardEnrollment} element={<CardEnrollmentPage />} />
          <Route
            path={PATH.cardConfirmation}
            element={<CardEnrollmentConfirmation />}
          />
          <Route index element={<Home />} />
        </Route>
        <Route path="/*" element={<NonePage />} />
      </Routes>
    </div>
  );
}

export default App;
