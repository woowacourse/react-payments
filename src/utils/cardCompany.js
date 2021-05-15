import cardInfo from "../data/banks.json";

const preprocessing = (cardNumber) => {
  return cardNumber.replace(/[^0-9]/g, "").slice(0, 6);
};

export const isCardCompany = (cardCompany) => {
  return !!Object.values(cardInfo).find((card) => card.name === cardCompany);
};

export const getCardCompany = (cardNumber) => {
  cardNumber = preprocessing(cardNumber);

  const card = Object.values(cardInfo).find((card) =>
    card["bins"].some((binNumber) =>
      cardNumber.includes(binNumber.replace(/[\s]/g, ""))
    )
  );

  return card?.name;
};

export const getCardColor = (cardCompany) => {
  if (!isCardCompany(cardCompany)) {
    return "#D2D2D2";
  }

  const card = Object.values(cardInfo).find(
    (card) => card.name === cardCompany
  );

  return card?.color;
};

export const getAllCardCompanies = () => {
  return Object.values(cardInfo).map((card) => card.name);
};
