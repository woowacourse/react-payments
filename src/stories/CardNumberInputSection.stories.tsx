import { Meta, StoryObj } from '@storybook/react';
import CardNumberInputSection from '@/components/registerSection/CardNumberInputSection';
import { fn } from '@storybook/test';

const meta: Meta<typeof CardNumberInputSection> = {
  title: 'RegisterStep/CardNumberInputSection',
  component: CardNumberInputSection,
  tags: ['autodocs'],
  argTypes: {
    cardNumbers: {
      control: 'object',
      description: '카드 번호를 저장하는 배열',
    },
  },
  args: {
    cardNumbersChangeHandler: fn(),
  },
} satisfies Meta<typeof CardNumberInputSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: [
      { value: '0000', isError: false },
      { value: '0000', isError: false },
      { value: '0000', isError: false },
      { value: '0000', isError: false },
    ],
  },
};
