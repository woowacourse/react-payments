import { StyleContainer } from './BottomModal.style';
import Backdrop from './Backdrop';

interface Props extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<void>>;
  className: string;
}

const BottomModal = ({ isOpen, onClose, className, children }: Props) => {
  return isOpen ? (
    <>
      <Backdrop onClose={onClose}></Backdrop>
      <StyleContainer className={className}>{children}</StyleContainer>
    </>
  ) : null;
};

export default BottomModal;
