import { useState } from "react";
import CardPasswordInput from ".";

export default {
  title: "CardPasswordInput",
  component: CardPasswordInput,
};

export const CardPassword = () => {
  const [form, setForm] = useState({
    cardNumber: ["", "", "", ""],
    expiredDate: ["", ""],
    ownerName: "",
    secureCode: "",
    password: ["", ""],
  });

  const updatePassword = (number, index) => {
    setForm({
      ...form,
      password: [
        ...password.slice(0, index),
        number,
        ...password.slice(index + 1),
      ],
    });
  };
  const { password } = form;

  return <CardPasswordInput state={password} updateForm={updatePassword} />;
};
