import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import { CardNumberInput } from './CardNumberInput';

const Container = styled.div`
  width: 320px;
`;

const meta = {
  title: 'payments/CardNumberInput',
  component: CardNumberInput,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: '' },
  render: () => {
    const [value, setValue] = useState('');

    return <CardNumberInput value={value} onChange={setValue} />;
  },
};
