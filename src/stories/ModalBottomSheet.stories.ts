import type { Meta, StoryObj } from '@storybook/react';
import ModalBottomSheet from '../components/common/ModalBottomSheet/ModalBottomSheet';

const meta = {
  component: ModalBottomSheet,
  title: '하단 모달 (ModalBottomSheet)',
} satisfies Meta<typeof ModalBottomSheet>;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: { isModalOpen: true, sheetHeight: '150px' },
};

export default meta;
