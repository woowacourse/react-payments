import styles from './App.module.css';
import { useState } from 'react';
import { CARD_NUMBERS_UNIT_LENGTH } from './constants/input';
import { Date } from './types/date';
import AddNewCardPage from './pages/AddNewCardPage';
import { FocusProvider } from './providers/FocusProvider.js';

function App() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(new Array(CARD_NUMBERS_UNIT_LENGTH).fill(''));

  const [date, setDate] = useState<Date>({
    month: '',
    year: '',
  });

  const [ownerName, setOwnerName] = useState<string>('');
  return (
    <main className={styles.background}>
      <FocusProvider>
        <AddNewCardPage />
      </FocusProvider>
    </main>
  );
}

export default App;
