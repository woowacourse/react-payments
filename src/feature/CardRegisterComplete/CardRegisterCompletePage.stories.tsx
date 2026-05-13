import type {Meta, StoryObj} from '@storybook/react-vite';
import {MemoryRouter} from 'react-router-dom';

import CardRegisterCompletePage from './CardRegisterCompletePage';

const meta = {
  title: 'feature/CardRegisterComplete/CardRegisterCompletePage',
  component: CardRegisterCompletePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CardRegisterCompletePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={[{pathname: '/', state: {cardPrefix: '4123', companyName: '신한카드'}}]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const NoState: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={[{pathname: '/'}]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};
