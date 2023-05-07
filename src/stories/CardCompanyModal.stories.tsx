import type { Meta, StoryObj } from "@storybook/react";
import CardCompanyModal from "components/CardCompanyModal/CardCompanyModal";

const meta = {
  component: CardCompanyModal,
  title: "Modal",
} satisfies Meta<typeof CardCompanyModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardCompany: Story = {
  args: {
    /* eslint-disable-next-line */
    closeModal: () => {},
  },
};
