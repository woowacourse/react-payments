import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import AddNewCardPage from './pages/AddNewCardPage/AddNewCardPage.js';
import { FocusProvider } from './providers/FocusProvider.js';
import CompleteAddNewCardPage from './pages/CompleteAddNewCardPage/CompleteAddNewCardPage.js';

function App() {
  return (
    <BrowserRouter>
      <main className={styles.background}>
        <div className={styles.layout}>
          <FocusProvider>
            <Routes>
              <Route path='/add-new-card' element={<AddNewCardPage />} />
              <Route path='/complete-add-new-card' element={<CompleteAddNewCardPage />} />
            </Routes>
          </FocusProvider>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
