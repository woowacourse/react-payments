import { useRef, useState } from "react";
import {
  isExpiredMonth,
  isExpiredYear,
  isFilledDueDateLength,
  isOverDueDateLength,
} from "../validation";

const useCardDueDate = () => {
  const [dueDate, setDueDate] = useState({ month: "", year: "" });
  const [error, setError] = useState({ month: false, year: false });

  const yearInputRef = useRef();

  const handleChangeDueDate = ({ target: { value, name } }) => {
    if (isOverDueDateLength(value)) return;

    if (isFilledDueDateLength(value)) {
      yearInputRef.current.focus();
    }

    if (name === "month") {
      setError({ ...error, [name]: isExpiredMonth(value) });
    }
    if (name === "year") {
      setError({ ...error, [name]: isExpiredYear(value) });
    }

    setDueDate({ ...dueDate, [name]: value });
  };

  return { dueDate, handleChangeDueDate, yearInputRef, error };
};

export default useCardDueDate;
