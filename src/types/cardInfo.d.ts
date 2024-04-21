type CardInfoValue = {
  value: string;
  isError: boolean;
};

interface TCardInformation {
  cardNumbers: CardInfoValue[];
  cardExpirationMonth: CardInfoValue;
  cardExpirationYear: CardInfoValue;
  cardOwnerName: CardInfoValue;
}
