import type { Meta, StoryObj } from "@storybook/react";
import NumberInput from "./NumberInput";
import { useState } from "react";

const meta: Meta<typeof NumberInput> = {
  title: "Components/NumberInput",
  component: NumberInput,
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const CardNumber: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState<string | null>(null);
    return (
      <>
        <NumberInput
          value={value}
          setValue={setValue}
          hasError={error !== null}
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
        <NumberInput
          value={value}
          setValue={setValue}
          hasError={error !== null}
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
        <NumberInput
          value={value}
          setValue={setValue}
          hasError={error !== null}
          maxLength={3}
          placeholder="123"
          onError={setError}
        />
        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
      </>
    );
  },
};
