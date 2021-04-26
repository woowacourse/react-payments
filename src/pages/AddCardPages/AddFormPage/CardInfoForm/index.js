import { Button, Form } from '../../../../components';
import { ExpirationDateInput, UserNameInput, SecurityCodeInput, PasswordInput } from './inputs';
import { CardNumberInput } from './CardNumberInput';
import { PAGE } from '../../../../constants';
import './style.css';

export const CardInfoForm = (props) => {
  const { setRoute, setCardCompany } = props;

  const handleCardInfoSubmit = (e) => {
    e.preventDefault();
    setRoute(PAGE.ADD_CARD_COMPLETE);
  };

  return (
    <Form className="CardInfoForm">
      <CardNumberInput setCardCompany={setCardCompany} />
      <ExpirationDateInput />
      <UserNameInput />
      <SecurityCodeInput />
      <PasswordInput />
      <Button onClick={handleCardInfoSubmit}>다음</Button>
    </Form>
  );
};
