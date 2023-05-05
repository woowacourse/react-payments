import React, { useCallback, useEffect } from 'react';
import useBoolean from './useBoolean';

export default function useDialog(opened = false) {
  const [isOpened, openDialog, closeDialog] = useBoolean(opened);

  const closeWithEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') closeDialog();
  }, []);

  useEffect(() => {
    isOpened
      ? document.addEventListener('keydown', closeWithEscape)
      : document.removeEventListener('keydown', closeWithEscape);
  }, [isOpened]);

  return { isOpened, openDialog, closeDialog, closeWithEscape };
}
