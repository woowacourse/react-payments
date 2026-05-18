import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import AddCardFormTemplate from '../components/AddCardForm/AddCardFormTemplate';

const meta = {
  title: 'Components/AddCardFormTemplate',
  component: AddCardFormTemplate,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AddCardFormTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
