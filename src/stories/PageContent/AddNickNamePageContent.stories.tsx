import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CreditCardsProvider } from '../../context/CreditCardsContext';
import { ResisteringCreditCardProvider } from '../../context/ResisteringCreditCardContext';
import { AddNickNamePageContent } from '../../components/AddNickNamePageContent';
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
  title: 'PageContent/AddNickNamePageContent',
  component: AddNickNamePageContent,
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
          <CreditCardsProvider>
            <Story />
          </CreditCardsProvider>
        </ResisteringCreditCardProvider>
      </Page>
    ),
  ],
} satisfies Meta<typeof AddNickNamePageContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyContent: Story = {};

export const FilledContent: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByPlaceholderText('10자 이내로 입력해주세요.'), '엽토');

    await userEvent.click(canvas.getByRole('button'));
  },
};
