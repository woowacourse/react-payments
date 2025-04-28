import type { Meta, StoryObj } from '@storybook/react';
import CardRegistrationPage from './CardRegistrationPage';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof CardRegistrationPage> = {
  title: 'Pages/CardRegistrationPage',
  component: CardRegistrationPage,
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
    cardNumbers: { first: '', second: '', third: '', fourth: '' },
    handleCardNumberChange: () => {},
    cardNumberError: '',
    cardCompany: '',
    handleSelectChange: () => {}
  }
};

export const WithCardNumber: Story = {
  args: {
    cardNumbers: { first: '1234', second: '5678', third: '9012', fourth: '3456' },
    handleCardNumberChange: () => {},
    cardNumberError: '',
    cardCompany: '',
    handleSelectChange: () => {}
  }
};

export const WithCardNumberAndCompany: Story = {
  args: {
    cardNumbers: { first: '4111', second: '1111', third: '1111', fourth: '1111' },
    handleCardNumberChange: () => {},
    cardNumberError: '',
    cardCompany: '신한카드',
    handleSelectChange: () => {}
  }
};

export const WithError: Story = {
  args: {
    cardNumbers: { first: '123', second: '', third: '', fourth: '' },
    handleCardNumberChange: () => {},
    cardNumberError: '4자리 숫자를 입력해주세요.',
    cardCompany: '',
    handleSelectChange: () => {}
  }
};
