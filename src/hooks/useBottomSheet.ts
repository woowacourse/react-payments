import { useState } from 'react';

const useBottomSheet = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);
  const openBottomSheet = () => setIsBottomSheetOpen(true);
  const closeBottomSheet = () => setIsBottomSheetOpen(false);

  return { isBottomSheetOpen, openBottomSheet, closeBottomSheet };
};

export default useBottomSheet;
