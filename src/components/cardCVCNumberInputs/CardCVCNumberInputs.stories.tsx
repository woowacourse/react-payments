import { Meta, StoryObj } from "@storybook/react";
import CardCVCNumberInputs from "./CardCVCNumberInputs";

const meta = {
    title: "CardCVCNumberInputs",
    component: CardCVCNumberInputs,
  } satisfies Meta<typeof CardCVCNumberInputs>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {};
