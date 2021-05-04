import { useState, useEffect } from 'react';

const useSnackbar = () => {
  const [isSnackbarShowing, setSnackbarShowing] = useState(false);

  useEffect(() => {
    if (isSnackbarShowing) {
      setTimeout(() => {
        setSnackbarShowing(false);
      }, 2000);
    }
  }, [isSnackbarShowing]);

  return [isSnackbarShowing, setSnackbarShowing];
};

export { useSnackbar };
