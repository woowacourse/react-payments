import type { Meta, StoryObj } from "@storybook/react";

import CardCompanyButton from "./CardCompanyButton";

const meta: Meta<typeof CardCompanyButton> = {
  title: "CardCompanyButton",
  component: CardCompanyButton,
  argTypes: {
    cardCompany: {
      options: ["BC", "SHINHAN", "HANA", "HYUNDAI", "KAKAO", "KB", "LOTTE", "WOORI"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardCompanyButton>;

export const Default: Story = {
  render: ({ cardCompany }) => {
    return (
      <>
        <CardCompanyButton cardCompany={cardCompany} />
      </>
    );
  },
};
