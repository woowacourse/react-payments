import { useState, useCallback } from 'react';
import SnackbarComponent from '../components/shared/Snackbar';

const useSnackbar = () => {
  const [isSnackbarShowing, setSnackbarShowing] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const openSnackbar = useCallback((message, delay = 2000) => {
    setSnackbarShowing(true);
    setSnackbarMessage(message);
    setTimeout(() => {
      setSnackbarShowing(false);
    }, delay);
  }, []);

  const Snackbar = () => <SnackbarComponent isShowing={isSnackbarShowing} message={snackbarMessage} />;

  return { Snackbar, openSnackbar };
};

export default useSnackbar;
