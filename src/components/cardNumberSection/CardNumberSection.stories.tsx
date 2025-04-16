import { Meta, StoryObj } from "@storybook/react";
import CardNumberSection from "./CardNumberSection";

const meta = {
    title: "CardNumberSection",
    component: CardNumberSection,
  } satisfies Meta<typeof CardNumberSection>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {};
