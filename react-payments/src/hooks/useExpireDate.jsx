import { useEffect, useState } from "react";
import { MAX_LENGTH } from "../constants";
import { focusNextElement, focusPrevElement } from "../util/focus";
import { isOverMaxLength, isInValidExpireDate } from "../util/validator";

const useExpireDate = () => {
  const [expireDate, setExpireDate] = useState({
    month: "",
    year: "",
  });
  const [expireDateReady, setExpireDateReady] = useState(false);

  useEffect(() => {
    if (isInValidExpireDate(expireDate) === expireDateReady) {
      setExpireDateReady((prev) => !prev);
    }
  }, [expireDate, expireDateReady]);

  const onChangeExpireDate = ({ target }) => {
    if (isOverMaxLength(target, MAX_LENGTH.EXPIRE_DATE)) {
      return;
    }

    const nextElement = target.nextSibling?.nextSibling;
    const prevElement = target.previousSibling?.previousSibling;

    focusNextElement({
      target,
      value: expireDate,
      maxLength: MAX_LENGTH.EXPIRE_DATE,
      nextElement,
    });
    focusPrevElement({
      target,
      value: expireDate,
      prevElement,
    });

    setExpireDate({
      ...expireDate,
      [target.name]: target.value,
    });
  };

  const { month, year } = expireDate;

  return { expireDate: { month, year }, onChangeExpireDate, expireDateReady };
};

export default useExpireDate;
