import { Button, Form } from '../../../../components';
import { CardNumberInput } from './CardNumberInput';
import { ExpirationDateInput } from './ExpirationDateInput';
import { OwnerNameInput } from './OwnerNameInput';
import { SecurityCodeInput } from './SecurityCodeInput';
import { PasswordInput } from './PasswordInput';
import { PAGE } from '../../../../constants';
import './style.css';

export const CardInfoForm = (props) => {
  const { setRoute, setCardCompany, setIsModalOpen, setCardNumberInString } = props;

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
      />
      <ExpirationDateInput />
      <OwnerNameInput />
      <SecurityCodeInput />
      <PasswordInput />
      <Button onClick={handleCardInfoSubmit}>다음</Button>
    </Form>
  );
};
