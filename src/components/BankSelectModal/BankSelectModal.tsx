import styled from 'styled-components';
import { Banks, KOR_BANK_NAME_BY_BANK } from '../../@types/banks';
import BankIconBox from '../BankIconBox/BankIconBox';

interface Props {
  onClose: () => void;
}

const BankSelectModal = ({ onClose }: Props) => {
  // TODO: type 문제 : Banks로 하고 싶은데...
  const bankList = [...Object.keys(KOR_BANK_NAME_BY_BANK)] as Banks[];

  return (
    <StyledContainer>
      {bankList.map((bank, index) => (
        <BankIconBox key={`bank-icon-box ${index}`} bankName={bank} onClose={onClose} />
      ))}
    </StyledContainer>
  );
};

export default BankSelectModal;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px 100px;
  padding: 50px 30px;
`;
