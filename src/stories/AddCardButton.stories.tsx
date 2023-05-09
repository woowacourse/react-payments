import { Meta, StoryObj } from '@storybook/react';
import AddCardButton from '../components/AddCardButton/AddCardButton';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  component: AddCardButton,
  title: 'Item/AddCardButton',
} satisfies Meta<typeof AddCardButton>;

export default meta;

type Story = StoryObj<typeof AddCardButton>;

export const Default: Story = {
  render: () => {
    return (
      <MemoryRouter initialEntries={['/']}>
        <AddCardButton />
      </MemoryRouter>
    );
  },
};
