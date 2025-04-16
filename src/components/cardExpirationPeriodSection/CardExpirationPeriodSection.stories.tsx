import { Meta, StoryObj } from "@storybook/react";
import CardExpirationPeriodSection from "./CardExpirationPeriodSection";

const meta = {
    title: "CardExpirationPeriodSection",
    component: CardExpirationPeriodSection,
  } satisfies Meta<typeof CardExpirationPeriodSection>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {};
