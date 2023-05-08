import type { Meta, StoryObj } from '@storybook/react';
import SecurityCode from './SecurityCode';
import { CreditCardProvider } from '../../../contexts/CreditCardContext';
import GlobalStyle from '../../../styles/globalStyle';

const securityCode = {
  component: SecurityCode,
  title: 'SecurityCode',
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
} satisfies Meta<typeof SecurityCode>;

export default securityCode;

type Story = StoryObj<typeof securityCode>;

export const Example = {
  args: {},
} satisfies Story;
