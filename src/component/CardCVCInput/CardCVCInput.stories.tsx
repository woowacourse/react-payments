import { Meta, StoryObj } from '@storybook/react';
import CardCVCInput from './CardCVCInput';

const meta: Meta<typeof CardCVCInput> = {
  title: 'Components/CardCVCInput',
  component: CardCVCInput,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardCVC: 123,
    onChange: () => {},
    hasError: false,
  },
};

export const Error: Story = {
  args: {
    cardCVC: 'abc',
    onChange: () => {},
    hasError: true,
  },
};
