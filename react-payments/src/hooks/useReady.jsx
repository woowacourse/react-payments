import { useEffect, useState } from "react";
import { isInValidCardType } from "../util/validator";

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

const useAllFormReady = ({
  cardNumberReady,
  expireDateReady,
  securityCodeReady,
  cardPasswordReady,
  cardType,
}) => {
  const [allFormReady, setAllFormReady] = useState(false);

  useEffect(() => {
    if (
      isReady({
        cardNumberReady,
        expireDateReady,
        securityCodeReady,
        cardPasswordReady,
        cardType,
      }) !== allFormReady
    ) {
      setAllFormReady((prevReady) => !prevReady);
    }
  }, [
    cardNumberReady,
    expireDateReady,
    securityCodeReady,
    cardPasswordReady,
    cardType,
    allFormReady,
  ]);

  return { allFormReady };
};

export default useAllFormReady;
