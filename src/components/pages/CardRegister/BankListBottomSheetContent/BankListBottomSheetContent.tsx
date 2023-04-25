import { BANK_LIST, BankNames } from "../../../../constants/bankList";

export interface BankListBottomSheetContentProps {
  onChange: (newBankName: BankNames) => void;
}

const BankListBottomSheetContent = ({
  onChange,
}: BankListBottomSheetContentProps) => {
  return (
    <>
      {BANK_LIST.map((bank) => {
        return (
          <div key={bank.id} onClick={() => onChange(bank.name)}>
            <h2>{bank.name}</h2>
          </div>
        );
      })}
    </>
  );
};

export default BankListBottomSheetContent;
