import { REQUEST_STATUS } from 'constants/';

const HOST_NAME = 'https://json.compy.life';

const request = async (url, option) => {
  try {
    const response = await fetch(HOST_NAME + url, option);
    const jsonBody = await response.json();

    return {
      status: response.ok ? REQUEST_STATUS.SUCCESS : REQUEST_STATUS.FAIL,
      content: jsonBody,
    };
  } catch (error) {
    return {
      status: REQUEST_STATUS.FAIL,
      content: `서버와의 통신에 실패하였습니다. (${error.message})`,
    };
  }
};

export const requestErrorHandler =
  ({ status, content }) =>
  ({ SUCCESS: handleRequestSuccess, FAIL: handleRequestFail }) => {
    if (status === REQUEST_STATUS.FAIL) {
      handleRequestFail(content);
      return;
    }

    handleRequestSuccess(content);
  };

export const requestGetCardData = async () => {
  const response = await request('/card', {
    method: 'GET',
  });

  return response;
};

export const requestInsertCardData = async ({
  cardName,
  companyId,
  cardNumber,
  expireMonth,
  expireYear,
  userName,
  securityCode,
  cardPassword,
}) => {
  const response = await request('/card', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cardName,
      companyId,
      cardNumber,
      expireMonth,
      expireYear,
      userName,
      securityCode,
      cardPassword,
    }),
  });

  return response;
};

export const requestUpdateCardData = async (
  id,
  {
    cardName,
    companyId,
    cardNumber,
    expireMonth,
    expireYear,
    userName,
    securityCode,
    cardPassword,
  },
) => {
  const response = await request(`/card/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cardName,
      companyId,
      cardNumber,
      expireMonth,
      expireYear,
      userName,
      securityCode,
      cardPassword,
    }),
  });

  return response;
};

export const requestDeleteCardData = async (id) => {
  const response = await request(`/card/${id}`, {
    method: 'DELETE',
  });

  return response;
};
