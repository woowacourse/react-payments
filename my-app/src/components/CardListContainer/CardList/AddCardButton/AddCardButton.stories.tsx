import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import AddCardButton from './AddCardButton';

const meta: Meta<typeof AddCardButton> = {
  title: 'Components/CardListContainer/AddCardButton',
  component: AddCardButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AddCardButton>;

export const Default: Story = {};
