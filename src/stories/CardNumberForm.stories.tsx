import type { Meta } from "@storybook/react";
import CardNumberForm from "../components/CardNumberForm";
import { useState } from "react";

const meta = {
  title: "CardNumberForm",
  component: CardNumberForm,
} satisfies Meta<typeof CardNumberForm>;

export default meta;

export const Default = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  return (
    <CardNumberForm
      firstNumber={first}
      setFirstNumber={setFirst}
      secondNumber={second}
      setSecondNumber={setSecond}
      thirdNumber={third}
      setThirdNumber={setThird}
      fourthNumber={fourth}
      setFourthNumber={setFourth}
      maxLength={4}
    />
  );
};
