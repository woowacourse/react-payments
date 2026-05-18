export const createCard = async (
  cardNumber: string,
  cardExpiryDate: string,
  cardCVC: string,
  cardBrand: string,
) => {
  try {
    const response = await fetch("https://api.antolibank.com/cards", {
      method: "POST",
      body: JSON.stringify({
        number: cardNumber,
        expirationDate: cardExpiryDate,
        cvc: cardCVC,
        issuerCode: cardBrand,
      }),
    });
    return response;
  } catch (err) {}
};
