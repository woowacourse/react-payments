import { Meta, StoryObj } from "@storybook/react";
import CardExpirationPeriodInputs from "./CardExpirationPeriodInputs";

const meta = {
    title: "CardExpirationPeriodInputs",
    component: CardExpirationPeriodInputs,
  } satisfies Meta<typeof CardExpirationPeriodInputs>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {};
