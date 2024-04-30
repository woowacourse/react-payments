import type { Meta, StoryObj } from '@storybook/react';
import CompleteSubmitFormPage from '../pages/CompleteSubmitFormPage';
import { MemoryRouter } from 'react-router-dom';
const meta = {
  title: 'CompleteSubmitFormPage',
  component: CompleteSubmitFormPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={[{ pathname: '/', state: '1234' }]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CompleteSubmitFormPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
