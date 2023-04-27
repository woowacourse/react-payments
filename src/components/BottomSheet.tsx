import { PropsWithChildren } from 'react';
import './BottomSheet.css';

type BottomSheetProps = {
  isOpen: boolean;
  onToggleOpen: () => void;
};

const BottomSheet = ({ children, isOpen, onToggleOpen }: PropsWithChildren<BottomSheetProps>) => {
  return (
    <>
      {isOpen && (
        <div className="bottom-sheet">
          <div className="back-drop" onClick={onToggleOpen}></div>
          <div className="bottom-sheet-body">{children}</div>
        </div>
      )}
    </>
  );
};

export default BottomSheet;
