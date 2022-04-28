import { useState } from "react";
import { MAX_LENGTH } from "../constants";
import { checkNextFocus, checkPrevFocus, isOverMaxLength } from "../util";

const useExpireDate = () => {
  const [expireDate, setExpireDate] = useState({
    first: "",
    second: "",
  });

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
  return [[first, second], onChangeExpireDate];
};

export default useExpireDate;
