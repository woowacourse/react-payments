import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import CardsEmptyTemplate from '../components/Cards/CardsEmptyTemplate';

const meta = {
  title: 'Cards/CardsEmptyTemplate',
  component: CardsEmptyTemplate,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardsEmptyTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
