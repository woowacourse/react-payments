import { useState } from "react";
import { EXPIRATION_DATE, FORMAT_CHAR } from "../constants";
import { isNumberValue } from "../utils";

const unformatExpirationDate = (formattedValue) => {
  return formattedValue.replace(FORMAT_CHAR.EXPIRATION_DATE_SEPARATOR, "");
};

const useExpirationDate = (initialValue) => {
  const [expirationDate, setExpirationDate] = useState(initialValue);

  const onExpirationDateChange = ({ target }) => {
    const unformattedValue = unformatExpirationDate(target.value);

    if (!isNumberValue(unformattedValue)) {
      return;
    }

    const month = unformattedValue.slice(0, EXPIRATION_DATE.MONTH_LENGTH);
    const year = unformattedValue.slice(EXPIRATION_DATE.MONTH_LENGTH);

    setExpirationDate({
      month,
      year,
    });
  };

  return [expirationDate, onExpirationDateChange];
};

export default useExpirationDate;
