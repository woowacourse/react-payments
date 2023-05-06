import CardCompanyButton from "./CardCompanyButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CardCompanyButton> = {
  title: "CardCompanyButton",
  component: CardCompanyButton,
  argTypes: {
    cardCompany: {
      description: "카드사 옵션입니다.",
      defaultValue: "BC",
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardCompanyButton>;

export const Default: Story = {
  render: ({ cardCompany }) => {
    return <CardCompanyButton cardCompany={cardCompany} />;
  },

  args: {
    cardCompany: "BC",
  },
};
