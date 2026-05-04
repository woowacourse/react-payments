import type { Meta, StoryObj } from "@storybook/react";
import CardInfoInput from "./Input";
import { useState } from "react";

const meta: Meta<typeof CardInfoInput> = {
  title: "Components/CardInfoInput",
  component: CardInfoInput,
};

export default meta;
type Story = StoryObj<typeof CardInfoInput>;

export const CardNumber: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState<string | null>(null);
    return (
      <>
        <CardInfoInput
          value={value}
          setValue={setValue}
          validator={(v) => v.length === 4}
          maxLength={4}
          placeholder="0000"
          onError={setError}
        />
        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
      </>
    );
  },
};

export const EXP: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState<string | null>(null);
    return (
      <>
        <CardInfoInput
          value={value}
          setValue={setValue}
          validator={(v) => v.length === 2}
          maxLength={2}
          placeholder="MM"
          onError={setError}
        />
        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
      </>
    );
  },
};

export const CVC: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState<string | null>(null);
    return (
      <>
        <CardInfoInput
          value={value}
          setValue={setValue}
          validator={(v) => v.length === 3}
          maxLength={3}
          placeholder="123"
          onError={setError}
        />
        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
      </>
    );
  },
};
