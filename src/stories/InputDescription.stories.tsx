import { Meta, StoryObj } from "@storybook/react";
import InputDescription from "../components/Form/InputDescription";

const meta = {
  title: "InputDescription",
  component: InputDescription,
} satisfies Meta<typeof InputDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    description: "Description",
  },
};
