import type { Meta, StoryObj } from '@storybook/react';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-remix-react-router';

import { CARD_COMPANY, ETC_CARD_COMPANY } from '../constants';
import { CardInfo } from '../modules/useCardInfoReducer';
import { CardEnrollmentConfirmation } from '../pages';

const meta = {
  title: 'Page',
  component: CardEnrollmentConfirmation,
  decorators: [withRouter],
} satisfies Meta<typeof CardEnrollmentConfirmation>;

export default meta;

type Story = StoryObj<typeof meta>;

const CARD: CardInfo = {
  numbers: ['4123', '2013', '1111', '4567'],
  mark: 'visa',
  period: { month: '04', year: '24' },
  userName: 'BADA',
  company: CARD_COMPANY.get('bc') || ETC_CARD_COMPANY,
  cvc: '123',
  password: '11',
};

export const CardEnrollmentConfirmationPageDefault: Story = {
  args: {},
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/card/confirmation',
      },
      location: {
        state: { state: CARD },
      },
    }),
  },
};
