import styled from 'styled-components';
import BankItem from './BankItem';
import { BottomSheet } from 'hae-on-bottom-sheet';
import { CONVERT_BANK_NAME } from '../../utils/Constants';

interface BankListProps {
  onClose: () => void;
}

const bankNames = Object.keys(CONVERT_BANK_NAME);

const BankList = ({ onClose }: BankListProps) => {
  return (
    <BottomSheet onClose={onClose}>
      <BankContainer>
        {bankNames.map((bankName) => {
          return (
            <BankItem key={bankName} bankName={bankName} onClose={onClose} />
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
