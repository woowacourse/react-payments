import type { Meta, StoryObj } from '@storybook/react';
import CompletePage from '../../routes/CompletePage';
import { MemoryRouter } from 'react-router-dom';
import { ROUTER_PATH } from '../../constants/setting';

const cardInfo = {
  number: {
    first: '5511',
    second: '1234',
    third: '1234',
    fourth: '1234',
  },
  expiration: {
    month: '12',
    year: '26',
  },
  company: 'BC카드',
  cvc: '123',
  passwordFront: '12',
};

const meta = {
  title: 'Routes/CompletePage',
  component: CompletePage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter
        initialEntries={[
          {
            pathname: ROUTER_PATH.MAIN,
            state: { cardInfo },
          },
        ]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CompletePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
