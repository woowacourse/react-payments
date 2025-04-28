import type { Meta, StoryObj } from '@storybook/react';
import CardRegistrationCompletedPage from './CardRegistrationCompletedPage';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof CardRegistrationCompletedPage> = {
  title: 'Pages/CardRegistrationCompletedPage',
  component: CardRegistrationCompletedPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: { first: '1234', second: '5678', third: '9012', fourth: '3456' },
    cardCompany: '신한카드'
  }
};
