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
import { ShowNextFieldConditionParams } from '../../hooks/useCreateNextField';

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
    showNextFieldOnValid: (params: ShowNextFieldConditionParams) => void;
  };
  cardBrand: {
    cardBrandState: string | null;
    setCardBrandState: React.Dispatch<React.SetStateAction<string | null>>;
  };
  cvcNumber: {
    cvcNumberState: string;
    setCVCNumberState: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isCVCNumberError: boolean;
    setIsFocusCVCPreview: React.Dispatch<React.SetStateAction<boolean>>;
  };
  password: {
    passwordState: string;
    setPasswordState: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isPasswordError: boolean;
  };
  isFieldShowCount: number;
}

const CardInformationForm = (props: CardInformationFormProps) => {
  const {
    cardNumbers,
    expirationDate,
    userName,
    cardBrand,
    cvcNumber,
    password,
    isFieldShowCount,
  } = props;

  const fields: Array<React.ReactNode> = [
    <CardNumbersField key={0} {...cardNumbers} />,
    <CardBrandField key={1} {...cardBrand} />,
    <ExpirationDateField key={2} {...expirationDate} />,
    <UserNameField key={3} {...userName} />,
    <CVCNumberField key={4} {...cvcNumber} />,
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
