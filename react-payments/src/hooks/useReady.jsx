import { useState } from "react";

const isInValidCardType = (cardType) => !cardType;

const isReady = ({
  cardNumberReady,
  expireDateReady,
  securityCodeReady,
  cardPasswordReady,
  cardType,
}) => {
  return (
    cardNumberReady &&
    expireDateReady &&
    securityCodeReady &&
    cardPasswordReady &&
    !isInValidCardType(cardType)
  );
};

const useReady = ({
  cardNumberReady,
  expireDateReady,
  securityCodeReady,
  cardPasswordReady,
  cardType,
}) => {
  const [ready, setReady] = useState(false);

  const checkReady = () => {
    if (
      isReady({
        cardNumberReady,
        expireDateReady,
        securityCodeReady,
        cardPasswordReady,
        cardType,
      }) !== ready
    ) {
      setReady((prevReady) => !prevReady);
    }
  };

  return [ready, checkReady];
};

export default useReady;
