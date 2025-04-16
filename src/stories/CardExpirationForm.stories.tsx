import type { Meta } from "@storybook/react";
import CardExpirationForm from "../components/CardExpirationForm";
import { useState } from "react";

const meta = {
  title: "CardExpirationForm",
  component: CardExpirationForm,
} satisfies Meta<typeof CardExpirationForm>;

export default meta;

export const Default = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  return (
    <CardExpirationForm
      month={month}
      setMonth={setMonth}
      year={year}
      setYear={setYear}
      maxLength={2}
    />
  );
};
