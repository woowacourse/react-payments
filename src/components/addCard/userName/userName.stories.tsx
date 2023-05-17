import { Meta, StoryObj } from "@storybook/react";
import { CardInfoProvider } from "../../../contexts/cardInfo";
import { UserName } from "./userName";

const meta: Meta<typeof UserName> = {
  component: UserName,
  title: "UserName",
  decorators: [
    (Story) => (
      <CardInfoProvider>
        <Story />
      </CardInfoProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof UserName>;

export const Default: Story = {
  args: {},
};
