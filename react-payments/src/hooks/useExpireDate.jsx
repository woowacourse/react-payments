import { useState } from "react";

const useExpireDate = () => {
  const [expireDate, setExpireDate] = useState({
    first: "",
    second: "",
  });

  const onChangeExpireDate = (e) => {
    setExpireDate({
      ...expireDate,
      [e.target.name]: e.target.value,
    });
  };

  const { first, second } = expireDate;
  return [[first, second], onChangeExpireDate];
};

export default useExpireDate;
