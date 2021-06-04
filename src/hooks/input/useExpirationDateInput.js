import { useState } from "react";
import { EXPIRATION_DATE, FORMAT_CHAR } from "../../constants";
import { isNumberValue } from "../../utils";

const unformatExpirationDate = (formattedValue) => {
  return formattedValue.replace(FORMAT_CHAR.EXPIRATION_DATE_SEPARATOR, "");
};

const formatExpirationDate = (unformattedExpirationDate) => {
  const month = unformattedExpirationDate.slice(
    0,
    EXPIRATION_DATE.MONTH_LENGTH
  );
  const year = unformattedExpirationDate.slice(EXPIRATION_DATE.MONTH_LENGTH);

  if (year) {
    return month + "/" + year;
  }

  return month;
};

const useExpirationDateInput = (initialValue) => {
  const [expirationDate, setExpirationDate] = useState(initialValue);

  const onExpirationDateChange = ({ target }) => {
    const unformattedValue = unformatExpirationDate(target.value);

    if (!isNumberValue(unformattedValue)) {
      return;
    }

    setExpirationDate(formatExpirationDate(unformattedValue));
  };

  return { value: expirationDate, onChange: onExpirationDateChange };
};

export default useExpirationDateInput;
