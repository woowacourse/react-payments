import CardCompanyButtonList from "./CardCompanyButtonList";
import type { Meta, StoryObj } from "@storybook/react";
import type { CardCompany } from "../../types";

const meta: Meta<typeof CardCompanyButtonList> = {
  title: "CardCompanyButtonList",
  component: CardCompanyButtonList,
};

export default meta;
type Story = StoryObj<typeof CardCompanyButtonList>;

export const Default: Story = {
  render: () => <CardCompanyButtonList />,
};
