import styled from 'styled-components';
import { VisibleDispatch } from 'ksone02-modal';
import { BANK } from '../../abstracts/constants';
import BankSelector from '../common/BankSelector';
import { Bank } from '../../abstracts/types';
import { useContext } from 'react';

const BankSelectBottomSheet = ({
  onClose,
  modalState,
  setBank,
  bank,
}: {
  onClose: () => void;
  modalState: boolean;
  setBank: (newBank: Bank) => void;
  bank: Bank | undefined;
}) => {
  const setVisible = useContext(VisibleDispatch);

  const setBankAndCloseModal = (newBank: Bank) => {
    setBank(newBank);
    setVisible && setVisible();
  };

  return (
    <BankSelectBottomSheetWrapper>
      {BANK.map((bankInfo) => (
        <BankSelector key={bankInfo.id} newBank={bankInfo} setBank={setBankAndCloseModal} bank={bank} />
      ))}
    </BankSelectBottomSheetWrapper>
  );
};

export default BankSelectBottomSheet;

const BankSelectBottomSheetWrapper = styled.div`
  padding: 34px 53px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-column-gap: 18px;
  grid-row-gap: 26px;
`;
