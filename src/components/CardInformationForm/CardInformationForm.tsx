import { Fields } from './style';
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
    onChangeUserName: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isUserNameError: boolean;
    showNextFieldOnValid: (params: ShowNextFieldConditionParams) => void;
  };
  cardBrand: {
    cardBrandState: string | null;
    onChangeCardBrand: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  };
  cvcNumber: {
    cvcNumberState: string;
    onChangeCVC: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isCVCNumberError: boolean;
    setIsFocusCVCPreview: React.Dispatch<React.SetStateAction<boolean>>;
  };
  password: {
    passwordState: string;
    onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    <CardBrandField key={1} {...cardBrand} onChange={cardBrand.onChangeCardBrand} />,
    <ExpirationDateField key={2} {...expirationDate} />,
    <UserNameField key={3} {...userName} onChange={userName.onChangeUserName} />,
    <CVCNumberField key={4} {...cvcNumber} onChange={cvcNumber.onChangeCVC} />,
    <PasswordField key={5} {...password} onChange={password.onChangePassword} />,
  ];

  return (
    <Fields>
      {fields.map((field, index) => {
        if (isFieldShowCount >= index) {
          return field;
        }
      })}
    </Fields>
  );
};

export default CardInformationForm;
