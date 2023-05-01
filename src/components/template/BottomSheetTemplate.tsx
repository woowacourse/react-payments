import { createContext, useEffect, useState } from 'react';
import styled from 'styled-components';

export const VisibleDispatch = createContext<() => void>(() => {});

const BottomSheetTemplate = (
  props: React.PropsWithChildren<{ onClose: () => void; modalState: boolean }>,
) => {
  const [visible, setVisible] = useState<boolean>(props.modalState);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setAnimate(true);

    if (!visible) {
      setAnimate(false);
      setTimeout(() => {
        props.onClose();
      }, 500);
    }
  }, [visible, props]);

  const onCloseModal = () => {
    setVisible(false);
  };

  return (
    <VisibleDispatch.Provider value={onCloseModal}>
      <BottomSheetWrapper>
        <BottomSheetDimmed onClick={onCloseModal} modalState={animate} />
        <BottomSheetInner modalState={animate}>{props.children}</BottomSheetInner>
      </BottomSheetWrapper>
    </VisibleDispatch.Provider>
  );
};

const BottomSheetWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const BottomSheetDimmed = styled.div<{ modalState: boolean }>`
  transition: all 0.5s ease;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  ${({ modalState }) => (modalState ? 'backdrop-filter: blur(2px); opacity: 1;' : 'opacity: 0;')}
`;

const BottomSheetInner = styled.div<{ modalState: boolean }>`
  transition: all 0.5s ease;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #fefefe;

  ${({ modalState }) =>
    modalState
      ? 'transform: translateY(0); box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.25);'
      : 'transform: translateY(100%);'}
`;

export default BottomSheetTemplate;
