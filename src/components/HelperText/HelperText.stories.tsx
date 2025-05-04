import type { Meta, StoryObj } from '@storybook/react';
import HelperText from './HelperText';

const meta: Meta<typeof HelperText> = {
  title: 'Common/HelperText',
  component: HelperText,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'text',
      options: ['isError', 'isValid'],
      description: '텍스트 타입',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HelperText>;

export const Error: Story = {
  args: {
    text: '숫자만 입력 가능합니다.',
    type: 'isError',
  },
};

export const Valid: Story = {
  args: {
    text: '유효한 입력입니다.',
    type: 'isValid',
  },
};
