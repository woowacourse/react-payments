import React, { useState, useEffect, ReactElement, ReactNode } from "react";
import Style from "./BottomSheetStyled";

interface BottomSheetProps {
  trigger: ReactElement;
  children?: ReactNode;
  buttons: (JSX.Element | false)[];
}

function BottomSheet({ trigger, children, buttons }: BottomSheetProps) {
  const [isOpened, setIsOpened] = useState(true);

  useEffect(() => {
    window.addEventListener("keyup", escHandler);

    return () => window.removeEventListener("keyup", escHandler);
  }, []);

  const closeBottomSheet = () => {
    setIsOpened(false);
  };

  const openBottomSheet = () => {
    setIsOpened(true);
  };

  const escHandler = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeBottomSheet();
  };

  return (
    <>
      <div onClick={openBottomSheet}>{trigger}</div>
      {isOpened && (
        <>
          <Style.Backdrop onClick={closeBottomSheet} />
          <Style.PopUp>
            <Style.Detail>
              {children}
              {buttons.map((button) => {
                return (
                  button &&
                  React.cloneElement(button, {
                    onClick: () => {
                      button.props.onClick();
                      closeBottomSheet();
                    },
                  })
                );
              })}
            </Style.Detail>
          </Style.PopUp>
        </>
      )}
    </>
  );
}

export default BottomSheet;
