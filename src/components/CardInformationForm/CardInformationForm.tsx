import { Form } from './style';
import {
  CVCNumberField,
  CardBrandField,
  CardNumbersField,
  ExpirationDateField,
  PasswordField,
  UserNameField,
} from '../FormField';

import {
  CardNumberErrorState,
  CardNumberState,
  ExpirationDateErrorState,
  ExpirationDateState,
  SetCardNumberState,
  SetExpirationDateState,
} from '../../types/Types';
import useCreateNextField from '../../hooks/useCreateNextField';

export interface CardInformationFormProps {
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
  cvcNumber: {
    cvcNumberState: string;
    setCVCNumberState: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isCVCNumberError: boolean;
    toggleIsFocusCVCPreview: React.DispatchWithoutAction;
  };
  password: {
    passwordState: string;
    setPasswordState: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isPasswordError: boolean;
  };
}

const CardInformationForm = (props: CardInformationFormProps) => {
  const { isFieldShowCount, showNextFieldOnLastElementBlur } = useCreateNextField();
  const { cardNumbers, expirationDate, userName, cardBrand, cvcNumber, password } = props;

  const fields: Array<React.ReactNode> = [
    <CardNumbersField
      key={0}
      {...cardNumbers}
      showNextFieldOnLastElementBlur={showNextFieldOnLastElementBlur}
    />,
    <CardBrandField
      key={1}
      {...cardBrand}
      showNextFieldOnLastElementBlur={showNextFieldOnLastElementBlur}
    />,
    <ExpirationDateField
      key={2}
      {...expirationDate}
      showNextFieldOnLastElementBlur={showNextFieldOnLastElementBlur}
    />,
    <UserNameField
      key={3}
      {...userName}
      showNextFieldOnLastElementBlur={showNextFieldOnLastElementBlur}
    />,
    <CVCNumberField
      key={4}
      {...cvcNumber}
      showNextFieldOnLastElementBlur={showNextFieldOnLastElementBlur}
    />,
    <PasswordField key={5} {...password} />,
  ];

  return (
    <Form>
      {fields.map((field, index) => {
        if (isFieldShowCount >= index) {
          return field;
        }
      })}
    </Form>
  );
};

export default CardInformationForm;
