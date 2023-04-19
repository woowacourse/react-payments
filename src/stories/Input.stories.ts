import type { Meta, StoryObj } from '@storybook/react';

import Input from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const CardNumber: Story = {
  args: {
    value: '',
    onChange: () => console.log('onChange CardNumber Input'),
    width: 'large',
    type: 'number',
  },
};

export const OwnerName: Story = {
  args: {
    value: '',
    onChange: () => console.log('onChange OwnerName Input'),
    width: 'large',
    type: 'text',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  },
};

export const CVC: Story = {
  args: {
    value: '',
    onChange: () => console.log('onChange CVC Input'),
    width: 'middle',
    type: 'number',
  },
};

export const CardPassword: Story = {
  args: {
    value: '',
    onChange: () => console.log('onChange CardPassword  Input'),
    width: 'small',
    type: 'password',
  },
};
