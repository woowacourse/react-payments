import { Meta, StoryObj } from "@storybook/react";
import { CardInfoProvider } from "../../../contexts/cardInfo";
import { CardNumber } from "./cardNumber";

const meta: Meta<typeof CardNumber> = {
  component: CardNumber,
  title: "CardNumber",
  decorators: [
    (Story) => (
      <CardInfoProvider>
        <Story />
      </CardInfoProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardNumber>;

export const Default: Story = {
  args: {},
};
