import type { Meta, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';
import AddNewCardForm from './AddNewCardForm';
import { CardInfoProvider } from '../CardInfoContext';

const meta = {
  title: 'Forms/AddNewCardForm',
  component: AddNewCardForm,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        {' '}
        <CardInfoProvider>
          <Story />
        </CardInfoProvider>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AddNewCardForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
