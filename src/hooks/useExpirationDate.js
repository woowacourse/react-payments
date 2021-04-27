import { useState } from "react";
import { isNumberValue } from "../utils";

const unformatExpirationDate = (formattedValue) => {
  return formattedValue.replace("/", "");
};

const useExpirationDate = (initialValue) => {
  const [expirationDate, setExpirationDate] = useState(initialValue);

  const onExpirationDateChange = ({ target }) => {
    //TODO: month의 validation을 할것인가
    const unformattedValue = unformatExpirationDate(target.value);

    if (!isNumberValue(unformattedValue)) {
      return;
    }

    const month = unformattedValue.slice(0, 2);
    const year = unformattedValue.slice(2);

    setExpirationDate({
      month,
      year,
    });
  };

  return [expirationDate, onExpirationDateChange];
};

export default useExpirationDate;
