import type { Meta, StoryObj } from "@storybook/react-vite";
import CardPreview from "./CardPreview";
import PaymentProvider from "../../context/PaymentProvider";

const meta: Meta<typeof CardPreview> = {
  title: "Components/CardPreview",
  component: CardPreview,
  decorators: [
    (Story) => (
      <PaymentProvider>
        <Story />
      </PaymentProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  render: () => {
    return <CardPreview />;
  },
};
