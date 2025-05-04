import type { Meta, StoryObj } from '@storybook/react';
import CardBrandInput from './CardBrandInput';
import { CardFormProvider } from '../../context/CardFormContext';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CardBrandInput> = {
  title: 'Components/CardBrandInput',
  component: CardBrandInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardBrandInput>;

const Template = () => {
  return (
    <CardFormProvider>
      <CardBrandInput />
    </CardFormProvider>
  );
};

export const emptyInput: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const brandSelect = canvas.getByTestId('card-brand-select');

    await userEvent.selectOptions(brandSelect, '');

    expect(brandSelect).toHaveValue('');
  },
};

export const validInput: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const brandSelect = canvas.getByTestId('card-brand-select');

    await userEvent.selectOptions(brandSelect, 'BC');

    expect(brandSelect).toHaveValue('BC');
  },
};
