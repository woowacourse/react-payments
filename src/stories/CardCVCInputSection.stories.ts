import { Meta, StoryObj } from '@storybook/react';
import CardCVCInputSection from '@/components/registerSection/CardCVCInputSection';
import { fn } from '@storybook/test';

const meta: Meta<typeof CardCVCInputSection> = {
  title: 'RegisterStep/CardCVCInputSection',
  component: CardCVCInputSection,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'CVC 입력값',
    },
    isError: {
      control: 'boolean',
      description: '에러 상태에 관한 상태 값',
    },
  },
  args: {
    onChange: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof CardCVCInputSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
