import type { Meta, StoryObj } from '@storybook/react';
import CardPage from './CardPage';
import { CardInfoProvider } from '../../features/cardInfo/context/CardInfoContext';
import { MemoryRouter } from 'react-router';
import { ROUTES } from '../../shared/constants/routes';

function CardPageWithContext() {
  return <CardPage />;
}

const meta: Meta<typeof CardPageWithContext> = {
  title: 'Pages/CardPage',
  component: CardPageWithContext,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={[ROUTES.CARD]}>
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
