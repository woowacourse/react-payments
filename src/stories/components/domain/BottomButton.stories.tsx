import type { Meta, StoryObj } from '@storybook/react';
import BottomButton from '../../../components/domain/BottomButton';
import { CONFIRM_BUTTON_LABEL } from '../../../constants/guide';

const meta = {
  title: 'Components/domain/Bottom Button',
  component: BottomButton,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: CONFIRM_BUTTON_LABEL,
  },
};
