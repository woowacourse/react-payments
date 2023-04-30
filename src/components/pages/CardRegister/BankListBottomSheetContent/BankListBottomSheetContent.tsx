import { BANK_LIST } from '../../../../constants/bankList';
import { BankNames } from '../../../../types/card.type';
import * as Styled from './BankListBottomSheetContent.styles';

export interface BankListBottomSheetContentProps {
  onChange: (newBankName: BankNames) => void;

  onSelect: () => void;
}

const BankListBottomSheetContent = ({ onChange, onSelect }: BankListBottomSheetContentProps) => {
  const handleClick = (bankName: BankNames) => {
    onChange(bankName);
    onSelect();
  };

  const bankValues = Object.values(BANK_LIST);

  return (
    <Styled.BankListBottomSheetContentContainer>
      {bankValues.map((bank) => {
        return (
          <Styled.BankItem key={bank.id}>
            <Styled.BankItemContent onClick={() => handleClick(bank.name)}>
              <Styled.BankLogo src={bank.imgSrc} alt={bank.name} />
              <Styled.BankName>{bank.name}</Styled.BankName>
            </Styled.BankItemContent>
          </Styled.BankItem>
        );
      })}
    </Styled.BankListBottomSheetContentContainer>
  );
};

export default BankListBottomSheetContent;
