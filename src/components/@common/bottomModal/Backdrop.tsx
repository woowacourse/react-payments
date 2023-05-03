import { useEffect } from 'react';
import { StyleBackDrop } from './BottomModal.style';

interface BackdropProps {
  onClose: React.Dispatch<React.SetStateAction<void>>;
}

const Backdrop = ({ onClose }: BackdropProps) => {
  useEffect(() => {
    const handleKeyupEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keyup', handleKeyupEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keyup', handleKeyupEscape);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <StyleBackDrop
      onClick={() => {
        onClose();
      }}
    ></StyleBackDrop>
  );
};

export default Backdrop;
