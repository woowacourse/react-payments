import cardInfo from "../data/banks.json";

const preprocessing = (cardNumber) => {
  return cardNumber.replace(/[^0-9]/g, "").slice(0, 6);
};

export const isCardCompany = (cardCompany) => {
  return !!Object.keys(cardInfo).find(
    (key) => cardInfo[key].name === cardCompany
  );
};

export const getCardCompany = (cardNumber) => {
  cardNumber = preprocessing(cardNumber);

  const cardInfoKey = Object.keys(cardInfo).find((key) =>
    cardInfo[key]["bins"].some((binNumber) =>
      cardNumber.includes(binNumber.replace(/[\s]/g, ""))
    )
  );

  return cardInfo[cardInfoKey]?.name;
};

// TODO : CardType 이름이 맞나?
export const getCardColor = (cardCompany) => {
  if (!isCardCompany(cardCompany)) {
    return "#D2D2D2";
  }

  const cardInfoKey = Object.keys(cardInfo).find(
    (key) => cardInfo[key].name === cardCompany
  );

  return cardInfo[cardInfoKey]?.color;
};

// TODO : companyName 이름이 맞나?
export const getAllCardCompanies = () => {
  return Object.keys(cardInfo).map((key) => cardInfo[key].name);
};
