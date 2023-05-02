import type { Meta, StoryObj } from "@storybook/react";
import BottomSheet from "../component/common/Modal/BottomSheet";

type Story = StoryObj<typeof BottomSheet>;

const meta: Meta = {
  title: "Bottom Modal",
  component: BottomSheet,
  argTypes: {
    setOpen: {
      action: 'Closing modal',
      description: 'This is for setting open state to false.'
    },
    children: {
      table: { disable: true },
    },
  },
};

export default meta;

export const Modal: Story = {
  args: {
    open: true,
    children: <p>모달 내용은 여기에 표시됩니다!!</p>
  }
};
