import { PropsWithChildren } from 'react';

type BottomSheetProps = {
  isOpen: boolean;
  onChangeOpen: () => void;
};
const BottomSheet = ({ children }: PropsWithChildren<BottomSheetProps>) => {
  return <div className="bottom-sheet">{children}</div>;
};

export default BottomSheet;
