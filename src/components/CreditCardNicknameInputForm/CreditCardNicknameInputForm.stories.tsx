import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle, { GlobalLayout } from 'style/globalStyle';
import CardFormProvider from '../../providers/CardFormProvider';
import CreditCardNicknameInputForm from './CreditCardNicknameInputForm';

const meta = {
  title: 'CreditCardNicknameInputForm',
  component: CreditCardNicknameInputForm,
  decorators: [
    (Story) => (
      <CardFormProvider>
        <BrowserRouter>
          <GlobalStyle />
          <GlobalLayout>
            <Story />
          </GlobalLayout>
        </BrowserRouter>
      </CardFormProvider>
    ),
  ],
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  },
};
