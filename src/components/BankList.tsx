import styled from 'styled-components';
import BankItem from './common/BankItem';
import { CONVERT_BANK_NAME } from '../utils/Constants';
import BottomSheet from './BottomSheet';

const BankList = () => {
  const bankNames = Object.keys(CONVERT_BANK_NAME);

  return (
    <BottomSheet>
      <BottomSheetContainer>
        {bankNames.map((bankName) => {
          return <BankItem key={bankName} bankName={bankName} />;
        })}
      </BottomSheetContainer>
    </BottomSheet>
  );
};

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

export default BankList;
