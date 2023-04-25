import ReactDOM from 'react-dom';
import styled from 'styled-components';
import BankItem from './common/BankItem';
import { CONVERT_BANK_NAME } from '../utils/Constants';

const BottomSheet = () => {
  const bankNames = Object.keys(CONVERT_BANK_NAME);

  return ReactDOM.createPortal(
    <>
      <BottomSheetBackdrop />
      <BottomSheetContainer>
        {bankNames.map((bankName) => {
          return <BankItem key={bankName} bankName={bankName} />;
        })}
      </BottomSheetContainer>
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
  height: 227px;
  padding: 32px 16px;
  border: none;
  border-radius: 8px 8px 0px 0px;
  background: var(--white-color);
`;

export default BottomSheet;
