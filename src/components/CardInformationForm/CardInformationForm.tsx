import { Form } from './style';
import { CardBrandField, CardNumbersField, ExpirationDateField, UserNameField } from '../FormField';

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
  cardBrand: {
    cardBrandState: string | null;
    setCardBrandState: React.Dispatch<React.SetStateAction<string | null>>;
  };
}

const CardInformationForm = ({
  cardNumbers,
  expirationDate,
  userName,
  cardBrand,
}: CardInformationFormProps) => {
  return (
    <Form>
      <CardNumbersField {...cardNumbers} />
      <CardBrandField {...cardBrand} />
      <ExpirationDateField {...expirationDate} />
      <UserNameField {...userName} />
    </Form>
  );
};

export default CardInformationForm;
