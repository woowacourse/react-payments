import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import { CardNumberInput } from './CardNumberInput';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

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

export const WithMasks: Story = {
  args: { value: '9908-1121-1992-7328' },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <>
        <CardNumberInput value={value} onChange={setValue} />
        <CardNumberInput value={value} onChange={setValue} masks={[false, false, false, false]} />
        <CardNumberInput value={value} onChange={setValue} masks={[true, true, true, true]} />
      </>
    );
  },
};
