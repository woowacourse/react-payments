import styled from 'styled-components';
import { VisibleDispatch } from '../template/BottomSheetTemplate';
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
  const closeModal = (newBank: Bank) => {
    setBank(newBank);
    setVisible && setVisible();
  };

  const setVisible = useContext(VisibleDispatch);

  return (
    <BankSelectBottomSheetWrapper>
      {BANK.map((bankInfo) => (
        <BankSelector key={bankInfo.id} newBank={bankInfo} setBank={closeModal} bank={bank} />
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
