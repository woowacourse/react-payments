import { useState } from "react";
import ExpiredDateInput from ".";

export default {
  title: "ExpiredDateInput",
  component: ExpiredDateInput,
};

export const ExpiredDate = () => {
  const [form, setForm] = useState({
    expiredDate: ["", ""],
  });

  const { expiredDate } = form;
  const updateExpiredDate = (number, index) => {
    setForm({
      ...form,
      expiredDate: [
        ...expiredDate.slice(0, index),
        number,
        ...expiredDate.slice(index + 1),
      ],
    });
  };
  return (
    <ExpiredDateInput state={expiredDate} updateForm={updateExpiredDate} />
  );
};
