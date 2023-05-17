import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "navrary-modal";
import { BankMenu } from "./bankMenu";

const meta: Meta<typeof BankMenu> = {
  component: BankMenu,
  title: "BankMenu",
  decorators: [
    (Story) => (
      <Modal defaultOpen>
        <Modal.Backdrop />
        <Modal.Trigger />
        <Modal.Content>
          <Story />
        </Modal.Content>
      </Modal>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BankMenu>;

export const Default: Story = {
  args: {},
};
