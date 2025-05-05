import type { Meta, StoryObj } from '@storybook/react';
import useValues from '../hooks/useValues';
import { MemoryRouter } from 'react-router';
import { CardForm } from '../components/CardForm/CardForm';

const meta: Meta<typeof CardForm> = {
  title: 'Feature/CardForm',
  component: CardForm,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { cardForm } = useValues();

    return <CardForm {...cardForm} />;
  }
};
