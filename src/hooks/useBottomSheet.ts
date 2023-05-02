import { useState } from 'react';

const useBottomSheet = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);
  const onOpenBottomSheet = () => setIsBottomSheetOpen(true);
  const onCloseBottomSheet = () => setIsBottomSheetOpen(false);

  return { isBottomSheetOpen, onOpenBottomSheet, onCloseBottomSheet };
};

export default useBottomSheet;
