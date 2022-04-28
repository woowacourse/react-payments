import { useState } from "react";

const useReady = (cardNumber, expireDate, securityCode, cardPassword) => {
  const [ready, setReady] = useState(false);

  const isReady = () => {
    if (Object.values(cardNumber).some((number) => number.length !== 4)) {
      return false;
    }

    if (Object.values(expireDate).some((date) => date.length !== 2)) {
      return false;
    }

    if (securityCode.length !== 3) {
      return false;
    }

    if (Object.values(cardPassword).some((password) => password.length !== 1)) {
      return false;
    }

    return true;
  };

  const checkReady = () => {
    if (isReady() !== ready) {
      setReady((prevReady) => !prevReady);
    }
  };

  return [ready, checkReady];
};

export default useReady;
