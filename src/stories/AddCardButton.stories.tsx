import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';
import AddCardButton from '../components/CardListPageComponents/AddCardButton';

const meta = {
  title: 'Payment/cardListPageComponents/AddCardButton',
  component: AddCardButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof AddCardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onOpen: action('onOpen'),
  },
};
