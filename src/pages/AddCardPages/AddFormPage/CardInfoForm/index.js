import { createRef } from 'react';
import { Button, Form } from '../../../../components';
import { CardNumberInput } from './CardNumberInput';
import { ExpirationDateInput } from './ExpirationDateInput';
import { OwnerNameInput } from './OwnerNameInput';
import { SecurityCodeInput } from './SecurityCodeInput';
import { PasswordInput } from './PasswordInput';
import { PAGE } from '../../../../constants';
import './style.css';

export const CardInfoForm = (props) => {
  const {
    initialCardInfo,
    cardInfo,
    setCardInfo,
    setIsModalOpen,
    isFormFulFilled,
    setRoute,
  } = props;
  const { number, expirationDate, ownerName, securityCode, password } = cardInfo;
  const expirationDateInputRef = createRef();
  const ownerNameInputRef = createRef();
  const passwordInputRef = createRef();

  return (
    <Form className="CardInfoForm">
      <CardNumberInput
        number={number}
        setCardInfo={setCardInfo}
        setIsModalOpen={setIsModalOpen}
        expirationDateInputRef={expirationDateInputRef}
      />
      <ExpirationDateInput
        expirationDate={expirationDate}
        setCardInfo={setCardInfo}
        ref={expirationDateInputRef}
        ownerNameInputRef={ownerNameInputRef}
      />
      <OwnerNameInput
        initialOwnerName={initialCardInfo.ownerName}
        ownerName={ownerName}
        setCardInfo={setCardInfo}
        ref={ownerNameInputRef}
      />
      <SecurityCodeInput
        securityCode={securityCode}
        setCardInfo={setCardInfo}
        passwordInputRef={passwordInputRef}
      />
      <PasswordInput password={password} setCardInfo={setCardInfo} ref={passwordInputRef} />
      <Button
        disabled={!isFormFulFilled}
        onClick={(e) =>
          handleCardInfoSubmit({ e, cardInfo, setIsModalOpen, initialCardInfo, setRoute })
        }
      >
        다음
      </Button>
    </Form>
  );
};

function handleCardInfoSubmit({ e, initialCardInfo, cardInfo, setIsModalOpen, setRoute }) {
  e.preventDefault();

  if (isCardNameUnset(cardInfo.company, initialCardInfo.company)) {
    setIsModalOpen(true);
    return;
  }
  setRoute(PAGE.ADD_CARD_COMPLETE);
}

function isCardNameUnset(company, initialCompany) {
  return company.name === initialCompany.name || company.color === initialCompany.color;
}
