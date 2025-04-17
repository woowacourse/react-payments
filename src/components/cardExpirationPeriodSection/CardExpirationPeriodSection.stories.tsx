import { Meta, StoryObj } from "@storybook/react";
import CardExpirationPeriodSection from "./CardExpirationPeriodSection";

const meta = {
    title: "CardExpirationPeriodSection",
    component: CardExpirationPeriodSection,
  } satisfies Meta<typeof CardExpirationPeriodSection>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {
    args: {
      expirationPeriod: {month: "12",
      year : "23" },
      changeExpirationPeriod: () => alert('변경'),
      }
  };
