import { Meta, StoryObj } from "@storybook/react";
import CardEnrollForm from "../components/CardEnrollForm/CardEnrollForm";

const meta: Meta<typeof CardEnrollForm> = {
  component: CardEnrollForm,
};

export default meta;
type Story = StoryObj<typeof CardEnrollForm>;

export const Default: Story = {
  render: () => {
    return <CardEnrollForm />;
  },
};
