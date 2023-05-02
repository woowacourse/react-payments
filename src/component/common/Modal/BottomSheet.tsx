import { PropsWithChildren, useEffect } from "react";

import style from "./BottomSheet.module.css";

export interface BottomSheetProps extends PropsWithChildren {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function BottomSheet(props: BottomSheetProps) {
  const { children, open, setOpen } = props;

  const closeWithEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false);
  }

  const setCloseEventListener = () => {
    if (!open) return;

    window.addEventListener('keyup', closeWithEsc);

    return () => { window.removeEventListener('keyup', closeWithEsc) };
  };

  useEffect(setCloseEventListener, [open]);

  return (
    <div className={`${style.modal} ${open ? style.open : ''}`} aria-modal={open}>
      <div className={style.backdrop} onClick={() => setOpen(false)}></div>
      <div className={style.container}>
        {children}
      </div>
    </div>
  );
}
