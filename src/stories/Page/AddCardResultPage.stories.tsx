import type { Meta, StoryObj } from "@storybook/react";
import AddCardResultPage from "../../component/AddCardResultPage/AddCardResultPage";

const meta = {
  component: AddCardResultPage,
  title: "Page",
} satisfies Meta<typeof AddCardResultPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddCardResult: Story = {
  args: {
    /* eslint-disable-next-line */
    addCreditCard: () => {},
  },
};
