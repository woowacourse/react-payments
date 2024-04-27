type CardInfoValue = {
  value: string;
  isError: boolean;
};

interface CardInformation {
  cardNumbers: CardInfoValue[];
  cardExpirationMonth: CardInfoValue;
  cardExpirationYear: CardInfoValue;
  cardOwnerName: CardInfoValue;
  cardCompany: CardInfoValue;
  cardCVC: CardInfoValue;
}

interface UseInputReturn {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  validateMessage: string;
}

type CardNumbersType = UseInputReturn[];

type CardCompanyType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
