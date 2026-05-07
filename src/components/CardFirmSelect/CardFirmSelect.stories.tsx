import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CardFirmSelect from "./CardFirmSelect";

const meta: Meta<typeof CardFirmSelect> = {
  title: "Components/CardFirmSelect",
  component: CardFirmSelect,
};

export default meta;
type Story = StoryObj<typeof CardFirmSelect>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("placeholder");
    return (
      <CardFirmSelect
        cardFrimCategory={value}
        onChangeCardFirmCategory={setValue}
        value={value}
      />
    );
  },
};
