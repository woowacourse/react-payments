import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from '../../../../components';
import { CardNumberInput } from './CardNumberInput';
import { ExpirationDateInput } from './ExpirationDateInput';
import { OwnerNameInput } from './OwnerNameInput';
import { SecurityCodeInput } from './SecurityCodeInput';
import { PasswordInput } from './PasswordInput';
import { isFormFulFilled, isCardNameFulfilled } from './validator';
import { ROUTE } from '../../../../constants';

export const CardInfoForm = (props) => {
  const { initialCardInfo, cardInfo, setCardInfo, setIsModalOpen } = props;
  const { number, expirationDate, ownerName, securityCode, password } = cardInfo;
  const setNumber = (number) => setCardInfo((prevState) => ({ ...prevState, number }));
  const setCompany = (company) => setCardInfo((prevState) => ({ ...prevState, company }));
  const setExpirationDate = (expirationDate) => setCardInfo((prevState) => ({ ...prevState, expirationDate }));
  const setOwnerName = (ownerName) => setCardInfo((prevState) => ({ ...prevState, ownerName }));
  const setIsOwnerNameFilled = (isOwnerNameFilled) => setCardInfo((prevState) => ({ ...prevState, isOwnerNameFilled }));
  const setSecurityCode = (securityCode) => setCardInfo((prevState) => ({ ...prevState, securityCode }));
  const setPassword = (password) => setCardInfo((prevState) => ({ ...prevState, password }));
  const expirationDateInputRef = useRef();
  const ownerNameInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  return (
    <Form className="CardInfoForm">
      <CardNumberInput
        number={number}
        setNumber={setNumber}
        setCompany={setCompany}
        setIsModalOpen={setIsModalOpen}
        refToBeFocusedNext={expirationDateInputRef}
      />
      <ExpirationDateInput
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
        ref={expirationDateInputRef}
        refToBeFocusedNext={ownerNameInputRef}
      />
      <OwnerNameInput
        initialOwnerName={initialCardInfo.ownerName}
        ownerName={ownerName}
        setOwnerName={setOwnerName}
        setIsOwnerNameFilled={setIsOwnerNameFilled}
        ref={ownerNameInputRef}
      />
      <SecurityCodeInput
        securityCode={securityCode}
        setSecurityCode={setSecurityCode}
        refToBeFocusedNext={passwordInputRef}
      />
      <PasswordInput password={password} setPassword={setPassword} ref={passwordInputRef} />
      <Button
        className="CardInfoForm__Submit_Button"
        disabled={!isFormFulFilled({ cardInfo, initialCardInfo })}
        onClick={(e) => handleCardInfoSubmit({ e, cardInfo, setIsModalOpen, initialCardInfo, history })}
      >
        다음
      </Button>
    </Form>
  );
};

function handleCardInfoSubmit({ e, initialCardInfo, cardInfo, setIsModalOpen, history }) {
  e.preventDefault();

  if (!isCardNameFulfilled(cardInfo.company, initialCardInfo.company)) {
    setIsModalOpen(true);
    return;
  }
  history.push(ROUTE.ADD_COMPLETE);
}
