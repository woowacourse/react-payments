import { Meta, StoryObj } from '@storybook/react';
import RegisterCardNumber from '../components/registerSection/RegisterCardNumber';
import { fn } from '@storybook/test';
import { useRef } from 'react';

const meta: Meta<typeof RegisterCardNumber> = {
  title: 'RegisterStep/RegisterCardNumber',
  component: RegisterCardNumber,
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
} satisfies Meta<typeof RegisterCardNumber>;
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
  render: (args) => {
    const refs = Array(4)
      .fill(null)
      .map(() => useRef<HTMLInputElement>(null));
    return <RegisterCardNumber {...args} refs={refs} />;
  },
};
