import type { Meta, StoryObj } from '@storybook/react';
import CardPage from './CardPage';
import { CardInfoProvider } from '../../app/context/cardInfo/CardInfoProvider';
import { MemoryRouter } from 'react-router';

function CardPageWithContext() {
  return (
    <CardInfoProvider>
      <CardPage />
    </CardInfoProvider>
  );
}

const meta: Meta<typeof CardPageWithContext> = {
  title: 'Pages/CardPage',
  component: CardPageWithContext,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardPageWithContext>;

export const Default: Story = {};
