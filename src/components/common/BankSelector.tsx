import styled from 'styled-components';
import { Bank } from '../../abstracts/types';
import { BANK_COLOR_MAP } from '../../abstracts/constants';

const BankSelector = ({
  newBank,
  bank,
  setBank,
}: {
  newBank: Bank;
  bank: Bank | undefined;
  setBank: (newBank: Bank) => void;
}) => {
  const BankImage = BANK_COLOR_MAP[newBank.id].image;
  return (
    <BankSelectorWrapper isSelect={newBank.id === bank?.id} onClick={() => setBank(newBank)}>
      <BankImageWrapper>
        <BankImage />
      </BankImageWrapper>
      <BankText>{newBank.bankName}</BankText>
    </BankSelectorWrapper>
  );
};

export default BankSelector;

const BankSelectorWrapper = styled.div<{ isSelect: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  ${({ isSelect }) => isSelect && '& > div {transform: translateY(-7%)}'}
  &:hover {
    & > div {
      transform: translateY(-7%);
    }
  }
`;

const BankImageWrapper = styled.div`
  margin-bottom: 10px;
  transition: all 0.2s ease-in-out;
`;

const BankText = styled.p`
  font-size: 12px;
  color: #525252;
`;
