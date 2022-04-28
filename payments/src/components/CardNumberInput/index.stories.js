import { useState } from "react";
import CardNumberInput from ".";

export default {
  title: "CardNumberInput",
  component: CardNumberInput,
};

export const CardNumber = () => {
  const [form, setForm] = useState({
    cardNumber: ["", "", "", ""],
  });
  const { cardNumber } = form;

  const updateCardNumber = (number, index) => {
    setForm({
      ...form,
      cardNumber: [
        ...cardNumber.slice(0, index),
        number,
        ...cardNumber.slice(index + 1),
      ],
    });
  };
  return <CardNumberInput state={cardNumber} updateForm={updateCardNumber} />;
};
