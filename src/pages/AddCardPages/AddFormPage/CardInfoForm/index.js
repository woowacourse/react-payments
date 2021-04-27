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
  } = props;
  const expirationDateInputRef = createRef();
  const ownerNameInputRef = createRef();
  const passwordInputRef = createRef();
  const handleCardInfoSubmit = (e) => {
    e.preventDefault();
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
      <Button disabled={!isFormFulFilled} onClick={handleCardInfoSubmit}>
        다음
      </Button>
    </Form>
  );
};
