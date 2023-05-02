import { ReactNode, useEffect, useState } from 'react';
import { Backdrop, BottomSheetContainer } from './BottomSheet.styles';

interface BottomSheetProps {
  isOpened: boolean;
  onClose: () => void;
  children?: ReactNode;
}
const BottomSheet = ({ isOpened, onClose, children }: BottomSheetProps) => {
  const [shouldRender, setShouldRender] = useState(isOpened);

  useEffect(() => {
    if (isOpened) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpened]);

  if (!shouldRender) {
    return null;
  }

  return (
    <>
      <Backdrop onClick={onClose} />
      <BottomSheetContainer isOpened={isOpened}>{children}</BottomSheetContainer>
    </>
  );
};

export default BottomSheet;
