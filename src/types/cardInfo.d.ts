type CardInfoValue = {
  value: string;
  isError: boolean;
};

interface CardInformation {
  cardNumbers: CardInfoValue[];
  cardExpirationMonth: CardInfoValue;
  cardExpirationYear: CardInfoValue;
  cardOwnerName: CardInfoValue;
}
