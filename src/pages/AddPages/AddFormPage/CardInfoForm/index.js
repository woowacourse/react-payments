import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { CardInfoContext } from '../../../../contexts';
import { Button, Form } from '../../../../components';
import { CardNumberInput } from './CardNumberInput.js';
import { ExpirationDateInput } from './ExpirationDateInput.js';
import { OwnerNameInput } from './OwnerNameInput.js';
import { SecurityCodeInput } from './SecurityCodeInput.js';
import { PasswordInput } from './PasswordInput.js';
import { isFormFulFilled, isCardNameFulfilled } from './validator.js';
import { ROUTE } from '../../../../constants';

export const CardInfoForm = (props) => {
  const { cardInfo, initialCardInfo } = useContext(CardInfoContext);
  const { setIsModalOpen } = props;

  const expirationDateInputRef = useRef();
  const ownerNameInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  return (
    <Form className="CardInfoForm">
      <CardNumberInput setIsModalOpen={setIsModalOpen} refToBeFocusedNext={expirationDateInputRef} />
      <ExpirationDateInput ref={expirationDateInputRef} refToBeFocusedNext={ownerNameInputRef} />
      <OwnerNameInput ref={ownerNameInputRef} />
      <SecurityCodeInput refToBeFocusedNext={passwordInputRef} />
      <PasswordInput ref={passwordInputRef} />
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
