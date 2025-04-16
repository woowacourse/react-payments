import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
    title: "Input",
    component: Input,
  } satisfies Meta<typeof Input>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {
    args: {
        maxLength: 10,
        placeholder: "Enter text here",
    }
  };

  export const CardNumber: Story = {
    args: {
        maxLength: 4,
        placeholder: "1234",
    }
  };

  export const ExpirationPeriodMonth: Story = {
    args: {
        maxLength: 2,
        placeholder: "MM",
    }
  };

  export const ExpirationPeriodYear: Story = {
    args: {
        maxLength: 2,
        placeholder: "YY",
    }
  };

  export const CVC: Story = {
    args: {
        maxLength: 3,
        placeholder: "123",
    }
  };