import { PropsWithChildren, useEffect } from "react";

import style from "./BottomModal.module.css";

interface Props extends PropsWithChildren {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Button(props: Props) {
  const { children, isOpen, setIsOpen } = props;

  const escCloseHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener('keyup', escCloseHandler);

    return () => { window.removeEventListener('keyup', escCloseHandler) };
  }, [isOpen])

  return (
    <div className={`${style.modal} ${isOpen ? style.open : ''}`} aria-modal={isOpen}>
      <div className={style.backdrop} onClick={() => setIsOpen(false)}></div>
      <div className={style.container}>
        {children}
      </div>
    </div>
  );
}
