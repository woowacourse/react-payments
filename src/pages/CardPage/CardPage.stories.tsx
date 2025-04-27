import type { Meta, StoryObj } from '@storybook/react';
import CardPage from './CardPage';
import { CardInfoProvider } from '../../features/cardInfo/context/CardInfoContext';
import { MemoryRouter } from 'react-router';

function CardPageWithContext() {
  return <CardPage />;
}

const meta: Meta<typeof CardPageWithContext> = {
  title: 'Pages/CardPage',
  component: CardPageWithContext,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <CardInfoProvider>
          <Story />
        </CardInfoProvider>
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardPageWithContext>;

export const Default: Story = {};
