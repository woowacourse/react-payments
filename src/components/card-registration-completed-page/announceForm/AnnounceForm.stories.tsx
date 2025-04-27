import type { Meta, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';
import AnnounceForm from './AnnounceForm';
import { CardInfoProvider } from '../../main-page/CardInfoContext';

const meta = {
  title: 'Forms/AddNewCardForm',
  component: AnnounceForm,
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
} satisfies Meta<typeof AnnounceForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
