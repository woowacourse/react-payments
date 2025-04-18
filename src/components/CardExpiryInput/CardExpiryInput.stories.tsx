import type { Meta, StoryObj } from '@storybook/react';
import CardExpiryInput from './CardExpiryInput';
import { useState } from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import ERROR from '../../constants/errorMessage';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';

const meta: Meta<typeof CardExpiryInput> = {
  title: 'Components/CardExpiryInput',
  component: CardExpiryInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardExpiryInput>;

const Template = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  return (
    <CardExpiryInput
      month={month}
      setMonth={setMonth}
      year={year}
      setYear={setYear}
    />
  );
};

export const InvalidMonth_NonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText('MM');

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, 'ab');

    await expect(
      canvas.findByText(ERROR.REQUIRE.NUMBER)
    ).resolves.toBeInTheDocument();
  },
};

export const InvalidMonth_TooShort: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText('MM');

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, '1');

    await expect(
      canvas.findByText(
        `${CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}${ERROR.REQUIRE.SPECIFIC_LENGTH}`
      )
    ).resolves.toBeInTheDocument();
  },
};

export const InvalidYear_NonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText('MM');
    const yearInput = canvas.getByPlaceholderText('YY');

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, '12');

    await userEvent.clear(yearInput);
    await userEvent.type(yearInput, 'ㅁㅁ');

    await expect(
      canvas.findByText(ERROR.REQUIRE.NUMBER)
    ).resolves.toBeInTheDocument();
  },
};

export const InvalidYear_TooShort: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText('MM');
    const yearInput = canvas.getByPlaceholderText('YY');

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, '12');

    await userEvent.clear(yearInput);
    await userEvent.type(yearInput, '2');

    await expect(
      canvas.findByText(
        `${CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}${ERROR.REQUIRE.SPECIFIC_LENGTH}`
      )
    ).resolves.toBeInTheDocument();
  },
};
