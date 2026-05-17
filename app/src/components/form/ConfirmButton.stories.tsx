import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import { ConfirmButton } from './ConfirmButton';

const meta = {
  title: 'ConfirmButton',
  component: ConfirmButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ConfirmButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {
  args: {
    isFormComplete: true,
  },
};

export const Incomplete: Story = {
  args: {
    isFormComplete: false,
  },
};
