type CardNumbersType = UseInputReturn[];
type CardCompanyType = {
  value: string;
  ref: React.Ref;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

interface CardInformation {
  cardNumbers: CardNumbersType;
  cardExpirationMonth: UseInputReturn;
  cardExpirationYear: UseInputReturn;
  cardOwnerName: UseInputReturn;
  cardCompany: CardCompanyType;
  cardCVC: UseInputReturn;
  cardPassword: UseInputReturn;
}

interface UseInputReturn {
  value: string;
  ref: React.Ref;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  validateMessage: string;
}
