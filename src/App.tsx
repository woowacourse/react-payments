import { Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { PATH } from './constants';
import './styles/App.css';
import './styles/global.css';
import './styles/reset.css';
import { CardEnrollmentConfirmation, CardEnrollmentPage, Home } from './pages';

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
        </Route>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
