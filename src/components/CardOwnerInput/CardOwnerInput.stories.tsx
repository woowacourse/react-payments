import { Meta, StoryObj } from '@storybook/react';
import CardOwnerInput from './CardOwnerInput';

const meta: Meta<typeof CardOwnerInput> = {
  component: CardOwnerInput,
  title: 'CardOwnerInput',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  // FIXME: owner.length 때문에 owner를 넘겨줘야하는데 onChange(setOwner하는 이벤트핸들러)가 없어 인풋에서 입력 불가능하고 controls에서만 입력 가능.
  args: {
    owner: '',
  },
};
