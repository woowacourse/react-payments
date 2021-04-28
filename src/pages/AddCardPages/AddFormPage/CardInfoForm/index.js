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
    setRoute,
    setCardCompany,
    setIsModalOpen,
    setCardNumberInString,
    setExpirationDateInString,
    setOwnerNameInString,
    setSecurityCodeInString,
    setPasswordInString,
    isFormFulFilled,
    cardCompany,
    initialState,
  } = props;
  const expirationDateInputRef = createRef();
  const ownerNameInputRef = createRef();
  const passwordInputRef = createRef();
  const isCardNameUnset = (cardCompany, initialState) =>
    cardCompany.name === initialState.cardCompany.name ||
    cardCompany.color === initialState.cardCompany.color;

  const handleCardInfoSubmit = ({ e, cardCompany, setIsModalOpen, initialState }) => {
    e.preventDefault();

    if (isCardNameUnset(cardCompany, initialState)) {
      setIsModalOpen(true);
      return;
    }
    setRoute(PAGE.ADD_CARD_COMPLETE);
  };

  return (
    <Form className="CardInfoForm">
      <CardNumberInput
        setCardCompany={setCardCompany}
        setIsModalOpen={setIsModalOpen}
        setCardNumberInString={setCardNumberInString}
        expirationDateInputRef={expirationDateInputRef}
      />
      <ExpirationDateInput
        ref={expirationDateInputRef}
        ownerNameInputRef={ownerNameInputRef}
        setExpirationDateInString={setExpirationDateInString}
      />
      <OwnerNameInput ref={ownerNameInputRef} setOwnerNameInString={setOwnerNameInString} />
      <SecurityCodeInput
        passwordInputRef={passwordInputRef}
        setSecurityCodeInString={setSecurityCodeInString}
      />
      <PasswordInput ref={passwordInputRef} setPasswordInString={setPasswordInString} />
      <Button
        disabled={!isFormFulFilled}
        onClick={(e) => handleCardInfoSubmit({ e, cardCompany, setIsModalOpen, initialState })}
      >
        다음
      </Button>
    </Form>
  );
};
