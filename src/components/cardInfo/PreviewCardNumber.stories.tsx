import type { Meta, StoryObj } from "@storybook/react-vite";
import PreviewCardNumber from "./PreviewCardNumber";

const meta: Meta<typeof PreviewCardNumber> = {
  title: "Components/PreviewCardNumber",
  component: PreviewCardNumber,
};

export default meta;

type Story = StoryObj<typeof PreviewCardNumber>;

export const Default: Story = {
  args: {
    cardNumber: ["1234", "1234", "1234", "1234"],
  },
  render: (args) => {
    return <PreviewCardNumber {...args}></PreviewCardNumber>;
  },
};

export const Non: Story = {
  args: {
    cardNumber: ["1234", "12", "", ""],
  },
  render: (args) => {
    return <PreviewCardNumber {...args}></PreviewCardNumber>;
  },
};
