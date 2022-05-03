import { useRef, useState } from "react";
import {
  isExpiredMonth,
  isExpiredYear,
  isFilledDueDateLength,
  isOverDueDateLength,
} from "validation";
import { NAME } from "constant";

const useCardDueDate = () => {
  const [dueDate, setDueDate] = useState({ month: "", year: "" });
  const [error, setError] = useState({ month: false, year: false });

  const yearInputRef = useRef();

  const handleChangeDueDate = ({ target: { value, name } }) => {
    if (isOverDueDateLength(value)) return;

    if (isFilledDueDateLength(value)) {
      yearInputRef.current.focus();
    }

    if (name === NAME.MONTH) {
      setError({ ...error, [name]: isExpiredMonth(value) });
    }
    if (name === NAME.YEAR) {
      setError({ ...error, [name]: isExpiredYear(value) });
    }

    setDueDate({ ...dueDate, [name]: value });
  };

  return { dueDate, handleChangeDueDate, yearInputRef, error };
};

export default useCardDueDate;
