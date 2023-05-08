import { Meta, StoryObj } from "@storybook/react";
import { CardInfoProvider } from "../../../contexts/cardInfo";
import { ExpiredDate } from "./expiredDate";

const meta: Meta<typeof ExpiredDate> = {
  component: ExpiredDate,
  title: "ExpiredDate",
  decorators: [
    (Story) => (
      <CardInfoProvider>
        <Story />
      </CardInfoProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ExpiredDate>;

export const Default: Story = {
  args: {},
};
