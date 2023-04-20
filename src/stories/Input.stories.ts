import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../components/index';

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
    width: 'l',
    type: 'number',
  },
};

export const OwnerName: Story = {
  args: {
    value: '',
    onChange: () => console.log('onChange OwnerName Input'),
    width: 'xl',
    type: 'text',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  },
};

export const CVC: Story = {
  args: {
    value: '',
    onChange: () => console.log('onChange CVC Input'),
    width: 'm',
    type: 'number',
  },
};

export const CardPassword: Story = {
  args: {
    value: '',
    onChange: () => console.log('onChange CardPassword  Input'),
    width: 'xs',
    type: 'password',
  },
};
