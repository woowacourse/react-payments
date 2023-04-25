import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface BottomSheetProps {
  children: React.ReactNode;
}

const BottomSheet = ({ children }: BottomSheetProps) => {
  return ReactDOM.createPortal(
    <>
      <BottomSheetBackdrop />
      {children}
    </>,
    document.querySelector('#root') as HTMLElement
  );
};

const BottomSheetBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--backdrop-color);
`;

export default BottomSheet;
