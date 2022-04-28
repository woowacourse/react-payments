import { useState } from "react";
import { MAX_LENGTH, MAX_MONTH } from "../constants";
import { checkNextFocus, checkPrevFocus, isOverMaxLength } from "../util";

const isInValidExpireDate = (expireDate) => {
  return (
    Object.values(expireDate).some(
      (date) => date.length !== MAX_LENGTH.EXPIRE_DATE
    ) || Number(expireDate.first) > MAX_MONTH
  );
};

const useExpireDate = () => {
  const [expireDate, setExpireDate] = useState({
    first: "",
    second: "",
  });
  const [expireDateReady, setExpireDateReady] = useState(false);

  const checkReady = () => {
    if (isInValidExpireDate(expireDate) === expireDateReady) {
      setExpireDateReady((prev) => !prev);
    }
  };

  const onChangeExpireDate = ({ target }) => {
    if (isOverMaxLength(target, MAX_LENGTH.EXPIRE_DATE)) {
      return;
    }

    const nextElement = target.nextSibling?.nextSibling;
    const prevElement = target.previousSibling?.previousSibling;

    checkNextFocus({
      target,
      value: expireDate,
      maxLength: MAX_LENGTH.EXPIRE_DATE,
      nextElement,
    });
    checkPrevFocus({
      target,
      value: expireDate,
      prevElement,
    });

    setExpireDate({
      ...expireDate,
      [target.name]: target.value,
    });
  };

  const { first, second } = expireDate;
  checkReady();

  return [[first, second], onChangeExpireDate, expireDateReady];
};

export default useExpireDate;
