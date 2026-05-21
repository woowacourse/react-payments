import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import CardsErrorTemplate from '../components/Cards/CardsErrorTemplate';

const meta = {
  title: 'Cards/CardsErrorTemplate',
  component: CardsErrorTemplate,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardsErrorTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { refetcher: () => {} },
};
