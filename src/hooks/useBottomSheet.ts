import { useEffect, useState } from 'react';

export const useBottomSheet = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleBottomSheetOpen = () => {
    setIsBottomSheetOpen(true);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        setIsBottomSheetOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscapeKey);

    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return { isBottomSheetOpen, handleBottomSheetOpen, handleBottomSheetClose };
};
