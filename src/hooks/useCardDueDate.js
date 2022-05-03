import { useRef, useState } from "react";
import { DUE_DATE, MONTH } from "../constant";

const useCardDueDate = () => {
  const [dueDate, setDueDate] = useState({ month: "", year: "" });
  const [error, setError] = useState({ month: false, year: false });

  const yearInputRef = useRef();

  const handleChangeDueDate = ({ target: { value, name } }) => {
    if (value.length > DUE_DATE.UNIT_LENGTH) return;

    if (value.length === DUE_DATE.UNIT_LENGTH) {
      yearInputRef.current.focus();
    }

    setDueDate({ ...dueDate, [name]: value });

    if (name === "month") {
      setError({ ...error, [name]: value > MONTH.MAX || value < MONTH.MIN });
    } else {
      const currentYear = new Date().getFullYear().toString().slice(2);
      setError({ ...error, [name]: value < currentYear });
    }
  };

  return { dueDate, handleChangeDueDate, yearInputRef, error };
};

export default useCardDueDate;
