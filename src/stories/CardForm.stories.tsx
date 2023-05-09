import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';
import CardForm from '../components/cardForm/CardForm';

const meta = {
  title: 'Payment/cardForm/CardForm',
  component: CardForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  args: {
    onChangeForm: action('onChangeForm'),
  },
};
