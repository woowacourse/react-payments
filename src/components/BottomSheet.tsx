import { PropsWithChildren } from 'react';

import './BottomSheet.css';
import { BottomSheetProps } from '../type';
import { createPortal } from 'react-dom';

const BottomSheet = ({ children, isOpen, onToggleOpen }: PropsWithChildren<BottomSheetProps>) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div className="bottom-sheet">
            <div className="back-drop" onClick={onToggleOpen}></div>
            <div className="bottom-sheet-body">{children}</div>
          </div>,
          document.body
        )}
      )
    </>
  );
};

export default BottomSheet;
