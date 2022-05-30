const HOME_URL = "https://react-payments-onstar.herokuapp.com";

export const fetchGetCardList = () => {
  const response = fetch(`${HOME_URL}/cardData`, {
    method: "GET",
  }).then(res => {
    return res.json();
  });

  return response;
};

export const fetchGetCard = id => {
  const response = fetch(`${HOME_URL}/cardData/${id}`, {
    method: "GET",
  }).then(res => {
    return res.json();
  });

  return response;
};

export const fetchAddCard = cardData => {
  const date = new Date();
  const id = date.getTime();
  const newCardData = { ...cardData, id };

  const response = fetch(`${HOME_URL}/cardData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCardData),
  }).then(res => {
    return res.json();
  });

  return response;
};

export const fetchEditCard = (cardData, id) => {
  const response = fetch(`${HOME_URL}/cardData/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cardData),
  }).then(res => {
    return res.json();
  });

  return response;
};
