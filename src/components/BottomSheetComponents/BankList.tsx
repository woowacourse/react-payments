import styled from 'styled-components';
import BankItem from '../common/BankItem';
import BottomSheet from './BottomSheet';
import { CONVERT_BANK_NAME } from '../../utils/Constants';

interface BankListProps {
  onClose: () => void;
  onBankInfoChanged: (cardColor: string, bankName: string) => void;
}

const BankList = ({ onClose, onBankInfoChanged }: BankListProps) => {
  const bankNames = Object.keys(CONVERT_BANK_NAME);

  return (
    <BottomSheet onClose={onClose}>
      <BankContainer>
        {bankNames.map((bankName) => {
          return (
            <BankItem
              key={bankName}
              bankName={bankName}
              onClose={onClose}
              onBankInfoChanged={onBankInfoChanged}
            />
          );
        })}
      </BankContainer>
    </BottomSheet>
  );
};

const BankContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 2rem;

  width: 320px;
  margin: auto;
`;

export default BankList;
