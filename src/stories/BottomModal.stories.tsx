import type { Meta, StoryObj } from "@storybook/react";
import BottomModal from "../component/common/Modal/BottomModal";

type Story = StoryObj<typeof BottomModal>;

const meta: Meta = {
  title: "Bottom Modal",
  component: BottomModal,
  argTypes: {
    setIsOpen: {
      action: 'Closing modal',
      description: 'This is for setting isOpen state to false.'
    },
    children: {
      table: { disable: true },
    },
  },
};

export default meta;

export const Modal: Story = {
  args: {
    isOpen: true,
    children: <p>모달 내용은 여기에 표시됩니다!!</p>
  }
};
