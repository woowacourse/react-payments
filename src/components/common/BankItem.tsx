import styled from 'styled-components';
import { CONVERT_BANK_NAME } from '../../utils/Constants';

interface BankItemProps {
  bankName: string;
}

const BankItem = ({ bankName }: BankItemProps) => {
  return (
    <BankItemContainer>
      <BankImage
        src={`images/${CONVERT_BANK_NAME[bankName]}.png`}
        alt={bankName}
      />
      <span>{bankName}</span>
    </BankItemContainer>
  );
};

const BankItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BankImage = styled.img`
  margin-bottom: 10px;
  width: 37px;
  height: 37px;

  box-sizing: border-box;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 200ms ease-in-out;
  }
`;
export default BankItem;
