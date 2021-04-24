import { Button, Form } from '../../../../components';
import {
  CardNumberInput,
  ExpirationDateInput,
  UserNameInput,
  SecurityCodeInput,
  PasswordInput,
} from './inputs';
import { PAGE } from '../../../../constants';
import './style.css';

export const CardInfoForm = (props) => {
  const { setRoute } = props;

  const handleCardInfoSubmit = (e) => {
    e.preventDefault();
    setRoute(PAGE.ADD_CARD_COMPELETE);
  };

  return (
    <Form className="CardInfoForm">
      <CardNumberInput />
      <ExpirationDateInput />
      <UserNameInput />
      <SecurityCodeInput />
      <PasswordInput />
      <Button onClick={handleCardInfoSubmit}>다음</Button>
    </Form>
  );
};
