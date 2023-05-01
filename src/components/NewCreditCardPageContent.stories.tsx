import type { Meta } from '@storybook/react';
import { HashRouter } from 'react-router-dom';
import { NewCreditCardPageContent } from './NewCreditCardPageContent';

const meta = {
  title: 'NewCreditCardPageContent',
  component: NewCreditCardPageContent,
  decorators: [
    (Story) => (
      <HashRouter>
        <Story />
      </HashRouter>
    ),
  ],
} satisfies Meta<typeof NewCreditCardPageContent>;

export default meta;

export const Default = () => {
  return <NewCreditCardPageContent />;
};
