import type { Meta, StoryObj } from '@storybook/react';
import PaymentsSelectField from '../components/common/PaymentsSelectField';

const meta = {
  title: 'PaymentsSelectField',
  component: PaymentsSelectField,
} satisfies Meta<typeof PaymentsSelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'select-box',
    placeholder: '선택해주세요',
    options: [
      ['value1', '1'],
      ['value2', '2'],
      ['value3', '3'],
    ],
  },
};
