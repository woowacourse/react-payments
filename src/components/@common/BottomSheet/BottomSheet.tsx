import { ReactNode } from "react";
import { Backdrop, BottomSheetContainer } from "./BottomSheet.styles";

interface BottomSheetProps {
  isOpened: boolean;
  onClose: () => void;
  children?: ReactNode;
}
const BottomSheet = ({ isOpened, onClose, children }: BottomSheetProps) => {
  if (!isOpened) {
    return null;
  }

  return (
    <>
      <Backdrop onClick={onClose} />
      <BottomSheetContainer>{children}</BottomSheetContainer>
    </>
  );
};

export default BottomSheet;
