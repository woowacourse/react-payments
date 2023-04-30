import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const PORTAL_ID = 'modal-portal';

type ModalPortalProps = {
  closeModal: () => void;
};

const ModalPortal = ({ children, closeModal }: PropsWithChildren<ModalPortalProps>) => {
  const [mounted, setMounted] = useState(false);

  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);

    if (document) {
      const modal = document.getElementById(PORTAL_ID);
      ref.current = modal;
    }
  }, []);

  if (ref.current && mounted) {
    return createPortal(
      <Styled.Wrapper>
        <Styled.Backdrop onClick={closeModal} />
        {children}
      </Styled.Wrapper>,
      ref.current,
    );
  }

  return null;
};

export default ModalPortal;

export const PortalProvider = () => {
  return <div id={PORTAL_ID}></div>;
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 375px;

  @media (max-width: 500px) {
    & > * {
      width: 100vw;
    }
  }
`;

const Backdrop = styled.div`
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 500px) {
    & {
      width: 100vw;
    }
  }
`;

const Styled = {
  Wrapper,
  Backdrop,
};
