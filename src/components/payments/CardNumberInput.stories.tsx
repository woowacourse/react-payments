import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
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

export const Default: Story = {
  args: { value: '' },
  render: ({ value: initialValue, ...args }) => {
    const [value, setValue] = useState(initialValue);

    return <CardNumberInput {...args} value={value} onChange={setValue} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = canvas.getAllByRole('textbox');
    await userEvent.type(inputs[0], '9672002422789048');

    inputs.forEach((input, index) =>
      expect(input).toHaveValue('9672002422789048'.slice(index * 4, (index + 1) * 4)),
    );
  },
};

export const WithMasks: Story = {
  args: { value: '9908-1121-1992-7328' },
  render: ({ value: initialValue, ...args }) => {
    const [value, setValue] = useState(initialValue);

    return (
      <>
        <CardNumberInput {...args} value={value} onChange={setValue} />
        <CardNumberInput
          {...args}
          value={value}
          onChange={setValue}
          masks={[false, false, false, false]}
        />
        <CardNumberInput
          {...args}
          value={value}
          onChange={setValue}
          masks={[true, true, true, true]}
        />
      </>
    );
  },
};
