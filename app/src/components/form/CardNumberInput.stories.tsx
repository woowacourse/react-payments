import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { useState, useRef } from 'react';
import { CardContext } from '../../context/CardContext';

import { CardNumberInput } from './CardNumberInput';

const meta = {
  title: 'CardNumberInput',
  component: CardNumberInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderWithContext = () => {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const firstRef = useRef<HTMLInputElement>(null);
  return (
    <CardContext
      value={{
        cardNumber,
        setCardNumber,
        cardExpiryDate: { 'expiry-month': '', 'expiry-year': '' },
        setCardExpiryDate: () => {},
        cardCompany: '',
        setCardCompany: () => {},
        cardCVC: '',
        setCardCVC: () => {},
        cardPassword: '',
        setCardPassword: () => {},
      }}
    >
      <CardNumberInput firstRef={firstRef} onComplete={() => {}} />
    </CardContext>
  );
};

export const base: Story = {
  render: renderWithContext,
};

export const invalidInput: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByRole('textbox');
    await userEvent.type(firstInput, 'abc');
    await userEvent.tab();
  },
};

export const invalidCardNumber: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByRole('textbox');
    await userEvent.type(firstInput, '1');
    await expect(canvas.getByText('유효한 카드번호 형식이 아닙니다.')).toBeInTheDocument();
  },
};

export const invalidMastercard: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByRole('textbox');
    await userEvent.type(firstInput, '56');
    await expect(canvas.getByText('유효한 카드번호 형식이 아닙니다.')).toBeInTheDocument();
  },
};

export const validDiners: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByRole('textbox');
    await userEvent.type(firstInput, '36');
    await expect(canvas.queryByText('유효한 카드번호 형식이 아닙니다.')).toBeNull();
  },
};

export const validAmex: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByRole('textbox');
    await userEvent.type(firstInput, '34');
    await expect(canvas.queryByText('유효한 카드번호 형식이 아닙니다.')).toBeNull();
  },
};

export const validUnionPay: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole('textbox');
    await userEvent.type(inputs[0], '6221');
    await userEvent.type(inputs[1], '26');
    await expect(canvas.queryByText('유효한 카드번호 형식이 아닙니다.')).toBeNull();
  },
};

const createNoNetworkBrandValidationPlay =
  (inputIndex: number): Story['play'] =>
  async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getAllByRole('textbox')[inputIndex];
    await userEvent.type(input, '1');
    await userEvent.tab();
    await expect(canvas.queryByText('유효한 카드번호 형식이 아닙니다.')).toBeNull();
  };

export const noNetworkBrandValidationOnSecondInput: Story = {
  render: renderWithContext,
  play: createNoNetworkBrandValidationPlay(1),
};

export const noNetworkBrandValidationOnThirdInput: Story = {
  render: renderWithContext,
  play: createNoNetworkBrandValidationPlay(2),
};

export const noNetworkBrandValidationOnFourthInput: Story = {
  render: renderWithContext,
  play: createNoNetworkBrandValidationPlay(3),
};

export const incompleteLengthOnBlur: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, secondInput] = canvas.getAllByRole('textbox');
    await userEvent.type(secondInput, '12');
    await userEvent.tab();
    await expect(canvas.getByText('카드 번호 각 항목은 4자리여야 합니다.')).toBeInTheDocument();
  },
};

export const emptyInputOnBlur: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, secondInput] = canvas.getAllByRole('textbox');
    await userEvent.click(secondInput);
    await userEvent.tab();
    await expect(canvas.queryByText('카드 번호 각 항목은 4자리여야 합니다.')).toBeNull();
  },
};

export const completeLengthOnBlur: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, secondInput] = canvas.getAllByRole('textbox');
    await userEvent.type(secondInput, '1234');
    await userEvent.tab();
    await expect(canvas.queryByText('카드 번호 각 항목은 4자리여야 합니다.')).toBeNull();
  },
};
