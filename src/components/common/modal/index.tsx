import React, { PropsWithChildren, useContext, useEffect } from 'react';
import Overlay from './overlay';
import Content, { ContentProps } from './content';
import Trigger from './trigger';
import CloseButton from './closeButton';
import Header, { HeaderProps } from './header';
import Body, { BodyProps } from './body';
import Footer, { FooterProps } from './footer';

export interface CustomProps {
  children: React.ReactNode;
  isCustom?: boolean;
}

interface ModalComposition {
  Overlay: React.FC;
  Content: React.FC<ContentProps>;
  Header: React.FC<HeaderProps>;
  Body: React.FC<BodyProps>;
  Footer: React.FC<FooterProps>;
  Trigger: React.FC<CustomProps>;
  CloseButton: React.FC<CustomProps>;
}

interface ModalProps {
  isModal: boolean;
  closeModal: () => void;
  openModal: () => void;
  blockScrollOnMount?: boolean;
  closeOnOverlayClick?: boolean;
  isCenter?: boolean;
  isBottom?: boolean;
}

const ModalContext = React.createContext<ModalProps | null>(null);

export const useModalContext = () => {
  const modalState = useContext(ModalContext);
  if (modalState === null) throw new Error('ModalContext가 존재하지 않습니다.');

  return modalState;
};

const Modal: React.FC<PropsWithChildren<ModalProps>> & ModalComposition = ({
  isModal,
  blockScrollOnMount,
  closeModal,
  openModal,
  isCenter,
  isBottom,
  children,
}) => {
  useEffect(() => {
    if (blockScrollOnMount) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [blockScrollOnMount]);

  return (
    <ModalContext.Provider
      value={{
        isModal,
        isCenter,
        isBottom,
        closeModal,
        openModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

Modal.Overlay = Overlay;
Modal.Content = Content;
Modal.Trigger = Trigger;
Modal.CloseButton = CloseButton;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
