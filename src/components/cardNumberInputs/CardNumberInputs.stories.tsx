import { Meta, StoryObj } from "@storybook/react";
import CardNumberInputs from "./CardNumberInputs";

const meta = {
    title: "CardNumberInputs",
    component: CardNumberInputs,
  } satisfies Meta<typeof CardNumberInputs>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {};
