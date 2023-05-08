import type { Meta, StoryObj } from '@storybook/react';
import { ResisteringCreditCardProvider } from '../../context/ResisteringCreditCardContext';
import { NewCreditCardPageContent } from '../../components/NewCreditCardPageContent';
import { Page } from '../../components/common/Page';

const customViewports = {
  Default: {
    name: 'Default',
    styles: {
      width: '400px',
      height: '100%',
    },
  },
};

const meta = {
  title: 'PageContent/NewCreditCardPageContent',
  component: NewCreditCardPageContent,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      viewports: customViewports,
      defaultViewport: 'Default',
    },
  },
  decorators: [
    (Story) => (
      <Page>
        <ResisteringCreditCardProvider>
          <Story />
        </ResisteringCreditCardProvider>
      </Page>
    ),
  ],
} satisfies Meta<typeof NewCreditCardPageContent>;

export default meta;

type Story = StoryObj<typeof NewCreditCardPageContent>;

export const EmptyContent: Story = {};
