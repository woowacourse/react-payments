import { useRef, useState } from "react";
import { DUE_DATE } from "../constant";

const useCardDueDate = () => {
  const [dueDate, setDueDate] = useState({
    month: "",
    year: "",
  });
  const yearInputRef = useRef();

  const handleChangeDueDate = (key, { target: { value } }) => {
    if (value.length > DUE_DATE.UNIT_LENGTH) return;

    if (value.length === DUE_DATE.UNIT_LENGTH) {
      yearInputRef.current.focus();
    }

    setDueDate({ ...dueDate, [key]: value });

    // if (key === "month") {
    //   setError({ ...error, [key]: value > MONTH.MAX || value < MONTH.MIN });
    // } else {
    //   const currentYear = new Date().getFullYear().toString().slice(2);
    //   setError({ ...error, [key]: value < currentYear });
    // }
  };

  return { dueDate, handleChangeDueDate, yearInputRef };
};

export default useCardDueDate;
