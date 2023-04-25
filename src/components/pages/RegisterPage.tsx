import Card from '../@common/Card';
import { CreditCardContext } from '../../contexts/CreditCardContext';
import CardRegisterForm from '../registerForm/cardRegisterForm/CardRegisterForm';
import { useState } from 'react';
import CreditCardInfo from '../../@types/creditCardInfo';
import BottomModal from '../@common/BottomModal';
import BankSelectModal from '../BankSelectModal/BankSelectModal';
import { Banks, COLOR_BY_BANK, KOR_BANK_NAME_BY_BANK } from '../../@types/banks';

function RegisterPage() {
  const [creditCardInfo, setCreditCardInfo] = useState<CreditCardInfo>({
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    ownerName: '',
    securityCode: '',
    password: ['', ''],
    bank: 'hyundai' as Banks,
  });

  const [showModal, setShowModal] = useState(true);

  const setCreditCard = <T extends keyof CreditCardInfo>(
    target: T,
    newValue: CreditCardInfo[T]
  ) => {
    setCreditCardInfo((prev) => ({
      ...prev,
      [target]: newValue,
    }));
  };

  const bankName = KOR_BANK_NAME_BY_BANK[creditCardInfo.bank];
  const cardColor = COLOR_BY_BANK[creditCardInfo.bank];

  return (
    <CreditCardContext.Provider value={[creditCardInfo, setCreditCard]}>
      <Card
        cardNumber={creditCardInfo.cardNumber}
        ownerName={creditCardInfo.ownerName}
        expirationDate={creditCardInfo.expirationDate}
        onClick={() => {
          setShowModal(true);
        }}
        bankName={bankName}
        cardColor={cardColor}
      />
      <CardRegisterForm />
      <BottomModal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <BankSelectModal
          onClose={() => {
            setShowModal(false);
          }}
        ></BankSelectModal>
      </BottomModal>
    </CreditCardContext.Provider>
  );
}

export default RegisterPage;
