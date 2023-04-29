import type { Meta, StoryObj } from "@storybook/react";

import CardCompanyButton from "./CardCompanyButton";

const meta: Meta<typeof CardCompanyButton> = {
  title: "CardCompanyButton",
  component: CardCompanyButton,
  argTypes: {
    cardCompany: {
      control: { type: "radio" },
    },
  },

  args: { cardCompany: "BC" },
};

export default meta;
type Story = StoryObj<typeof CardCompanyButton>;

export const Default: Story = {
  render: ({ cardCompany }) => {
    return <CardCompanyButton cardCompany={cardCompany} onClick={() => {}} />;
  },
};
