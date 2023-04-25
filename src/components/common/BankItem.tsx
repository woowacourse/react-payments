import { CONVERT_BANK_NAME } from '../../utils/Constants';

interface BankItemProps {
  bankName: string;
}

const BankItem = ({ bankName }: BankItemProps) => {
  return (
    <>
      <img src={`images/${CONVERT_BANK_NAME[bankName]}.png`} alt={bankName} />
      <span>{bankName}</span>
    </>
  );
};

export default BankItem;
