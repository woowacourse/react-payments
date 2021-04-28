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
  const expirationDateInputRef = createRef();
  const ownerNameInputRef = createRef();
  const passwordInputRef = createRef();

  return (
    <Form className="CardInfoForm">
      <CardNumberInput
        cardInfo={cardInfo}
        setCardInfo={setCardInfo}
        setIsModalOpen={setIsModalOpen}
        expirationDateInputRef={expirationDateInputRef}
      />
      <ExpirationDateInput
        cardInfo={cardInfo}
        setCardInfo={setCardInfo}
        ref={expirationDateInputRef}
        ownerNameInputRef={ownerNameInputRef}
      />
      <OwnerNameInput
        initialCardInfo={initialCardInfo}
        cardInfo={cardInfo}
        setCardInfo={setCardInfo}
        ref={ownerNameInputRef}
      />
      <SecurityCodeInput
        cardInfo={cardInfo}
        setCardInfo={setCardInfo}
        passwordInputRef={passwordInputRef}
      />
      <PasswordInput cardInfo={cardInfo} setCardInfo={setCardInfo} ref={passwordInputRef} />
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

  if (isCardNameUnset(cardInfo, initialCardInfo)) {
    setIsModalOpen(true);
    return;
  }
  setRoute(PAGE.ADD_CARD_COMPLETE);
}

function isCardNameUnset(cardInfo, initialCardInfo) {
  return (
    cardInfo.company.name === initialCardInfo.company.name ||
    cardInfo.company.color === initialCardInfo.company.color
  );
}
