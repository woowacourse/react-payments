import type { Meta, StoryObj } from '@storybook/react';
import ExpirationDate from './ExpirationDate';
import { CreditCardProvider } from '../../../contexts/CreditCardContext';
import GlobalStyle from '../../../styles/globalStyle';

const expireDate = {
  component: ExpirationDate,
  title: 'ExpireDate',
  decorators: [
    (Story) => {
      return (
        <CreditCardProvider>
          <GlobalStyle />
          <Story />
        </CreditCardProvider>
      );
    },
  ],
} satisfies Meta<typeof ExpirationDate>;

export default expireDate;

type Story = StoryObj<typeof expireDate>;

export const Example = {
  args: {},
} satisfies Story;
