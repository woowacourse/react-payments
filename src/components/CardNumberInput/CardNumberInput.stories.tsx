import { Meta, StoryObj } from '@storybook/react';
import CardNumberInput from './CardNumberInput';

const meta: Meta<typeof CardNumberInput> = {
  component: CardNumberInput,
  title: 'CardNumberInput',
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    // TODO: onChange가 Story에서는 필요없을 것 같은데 어떻게 onChange를 넣어주면 좋을지
    onChange: [() => {}, () => {}, () => {}, () => {}],
  },
  render: (args) => <CardNumberInput {...args}></CardNumberInput>,
};
