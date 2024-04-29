import type { Meta, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';
import CardRegistrationCompletePage from './CardRegistrationCompletePage';

const meta = {
  title: 'page/CardRegistrationCompletePage',
  component: CardRegistrationCompletePage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/complete?number=1234&company=BC카드']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardRegistrationCompletePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
