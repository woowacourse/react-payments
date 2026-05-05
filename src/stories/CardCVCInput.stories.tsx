import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardCVCInput from '../components/CardCVCInput';

const meta = {
  title: 'Components/CardCVCInput',
  component: CardCVCInput,
  tags: ['autodocs'],
  args: {
    value: '',
    onChange: () => {},
  },
} satisfies Meta<typeof CardCVCInput>;

export default meta;
type Story = StoryObj<typeof meta>;

function Wrapper({ initialValue }: { initialValue: string }) {
  const [value, setValue] = useState(initialValue);
  return <CardCVCInput value={value} onChange={(v) => setValue(v)} />;
}

export const Empty: Story = {
  render: () => <Wrapper initialValue="" />,
};

export const Filled: Story = {
  render: () => <Wrapper initialValue="123" />,
};

export const Partial: Story = {
  render: () => <Wrapper initialValue="12" />,
};
