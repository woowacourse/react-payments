import styled from 'styled-components';
import BankItem from './common/BankItem';
import { CONVERT_BANK_NAME } from '../utils/Constants';
import BottomSheet from './BottomSheet';

const BankList = () => {
  const bankNames = Object.keys(CONVERT_BANK_NAME);

  return (
    <BottomSheet>
      <BankContainer>
        {bankNames.map((bankName) => {
          return <BankItem key={bankName} bankName={bankName} />;
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
