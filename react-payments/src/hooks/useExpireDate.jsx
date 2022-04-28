import { useState } from "react";

const useExpireDate = () => {
  const [expireDate, setExpireDate] = useState({
    first: "",
    second: "",
  });

  const onChangeExpireDate = (e) => {
    if (e.target.value.length > 2) {
      return;
    }

    if (
      expireDate[e.target.name].length < e.target.value.length &&
      e.target.value.length === 2 &&
      e.target.name !== "second"
    ) {
      e.target.nextSibling.nextSibling.focus();
    }

    if (
      expireDate[e.target.name].length > e.target.value.length &&
      e.target.value.length === 0 &&
      e.target.name !== "first"
    ) {
      e.target.previousSibling.previousSibling.focus();
    }

    setExpireDate({
      ...expireDate,
      [e.target.name]: e.target.value,
    });
  };

  const { first, second } = expireDate;
  return [[first, second], onChangeExpireDate];
};

export default useExpireDate;
