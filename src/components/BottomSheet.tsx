import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface BottomSheetProps {
  children: React.ReactNode;
}

const BottomSheet = ({ children }: BottomSheetProps) => {
  return ReactDOM.createPortal(
    <>
      <BottomSheetBackdrop />
      <BottomSheetContainer>{children}</BottomSheetContainer>
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

const BottomSheetContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 406px;
  height: 180px;
  padding: 42px 16px;
  border: none;
  border-radius: 8px 8px 0px 0px;
  background: var(--white-color);
`;

export default BottomSheet;
