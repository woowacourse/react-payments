import { Form } from './style';
import { CardNumbersField, ExpirationDateField, UserNameField } from '../FormField';

import {
  CardNumberErrorState,
  CardNumberState,
  ExpirationDateErrorState,
  ExpirationDateState,
  SetCardNumberState,
  SetExpirationDateState,
} from '../../types/Types';

interface CardInformationFormProps {
  cardNumbers: {
    cardNumberState: CardNumberState;
    setCardNumberState: SetCardNumberState;
    cardNumberErrorState: CardNumberErrorState;
  };
  expirationDate: {
    expirationDateState: ExpirationDateState;
    setExpirationDateState: SetExpirationDateState;
    expirationDateErrorState: ExpirationDateErrorState;
  };
  userName: {
    userNameState: string;
    setUserNameState: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isUserNameError: boolean;
  };
}

const CardInformationForm = ({
  cardNumbers,
  expirationDate,
  userName,
}: CardInformationFormProps) => {
  return (
    <Form>
      <CardNumbersField {...cardNumbers} />
      <ExpirationDateField {...expirationDate} />
      <UserNameField {...userName} />
    </Form>
  );
};

export default CardInformationForm;
