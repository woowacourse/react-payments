import { Payments } from '@pages/payments';

import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Submit from './pages/submit/Submit/Submit';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Payments />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </div>
  );
}

export default App;
