import type { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { CardRegisterForm } from '../../components/Form/CardRegisterForm';
import { ERROR } from '../../constants';

const meta = {
  title: 'Payments/Card/CardRegisterForm',
  component: CardRegisterForm,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof CardRegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <CardRegisterForm />;
  },
};

export const Success: Story = {
  render: () => {
    return <CardRegisterForm />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const hanaCardButton = canvas.findByText('하나카드');
    userEvent.click(await hanaCardButton);

    const cardSelectCompleteButton = canvas.findByText('카드사 선택 완료');
    userEvent.click(await cardSelectCompleteButton);

    const submitButton = canvas.findByText('다음');
    expect(await submitButton).toBeDisabled();

    const cardNumberInputs = canvas.getAllByTestId('cardNumberInput');
    await userEvent.type(cardNumberInputs[0], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[1], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[2], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[3], '1234', { delay: 100 });

    const expirationMonth = canvas.getByPlaceholderText('MM');
    const expirationYear = canvas.getByPlaceholderText('YY');
    await userEvent.type(expirationMonth, '12', { delay: 100 });
    await userEvent.type(expirationYear, '99', { delay: 100 });

    const ownerName = canvas.getByPlaceholderText('카드에 표시된 이름과 동일하게 입력하세요.');
    await userEvent.type(ownerName, 'ZERO ONE', { delay: 100 });

    const securityCode = canvas.getByPlaceholderText('•••');
    await userEvent.type(securityCode, '123', { delay: 100 });

    const passwordInputs = canvas.getAllByPlaceholderText('•');
    await userEvent.type(passwordInputs[0], '1', { delay: 100 });
    await userEvent.type(passwordInputs[1], '2', { delay: 100 });

    expect(await submitButton).toBeEnabled();
  },
};

export const FailedWithExpirationDate: Story = {
  render: () => {
    return <CardRegisterForm />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const KBCardButton = canvas.findByText('국민카드');
    userEvent.click(await KBCardButton);

    const cardSelectCompleteButton = canvas.findByText('카드사 선택 완료');
    userEvent.click(await cardSelectCompleteButton);

    const submitButton = canvas.findByText('다음');
    expect(await submitButton).toBeDisabled();

    const cardNumberInputs = canvas.getAllByTestId('cardNumberInput');
    await userEvent.type(cardNumberInputs[0], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[1], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[2], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[3], '1234', { delay: 100 });

    const expirationMonth = canvas.getByPlaceholderText('MM');
    const expirationYear = canvas.getByPlaceholderText('YY');
    await userEvent.type(expirationMonth, '4', { delay: 100 });
    await userEvent.type(expirationYear, '23', { delay: 100 });

    const expirationDateErrorMessage = canvas.getByText(ERROR.INVALID_EXPIRATION_DATE);
    expect(expirationDateErrorMessage).not.toBeUndefined();

    const ownerName = canvas.getByPlaceholderText('카드에 표시된 이름과 동일하게 입력하세요.');
    await userEvent.type(ownerName, 'LEFT HAND', { delay: 100 });

    const securityCode = canvas.getByPlaceholderText('•••');
    await userEvent.type(securityCode, '123', { delay: 100 });

    const passwordInputs = canvas.getAllByPlaceholderText('•');
    await userEvent.type(passwordInputs[0], '1', { delay: 100 });
    await userEvent.type(passwordInputs[1], '2', { delay: 100 });

    expect(await submitButton).toBeDisabled();
  },
};

export const FailedWithPassword: Story = {
  render: () => {
    return <CardRegisterForm />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const HyundaiCardButton = canvas.findByText('현대카드');
    userEvent.click(await HyundaiCardButton);

    const cardSelectCompleteButton = canvas.findByText('카드사 선택 완료');
    userEvent.click(await cardSelectCompleteButton);

    const submitButton = canvas.findByText('다음');
    expect(await submitButton).toBeDisabled();

    const cardNumberInputs = canvas.getAllByTestId('cardNumberInput');
    await userEvent.type(cardNumberInputs[0], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[1], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[2], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[3], '1234', { delay: 100 });

    const expirationMonth = canvas.getByPlaceholderText('MM');
    const expirationYear = canvas.getByPlaceholderText('YY');
    await userEvent.type(expirationMonth, '12', { delay: 100 });
    await userEvent.type(expirationYear, '99', { delay: 100 });

    const ownerName = canvas.getByPlaceholderText('카드에 표시된 이름과 동일하게 입력하세요.');
    await userEvent.type(ownerName, 'POCO', { delay: 100 });

    const securityCode = canvas.getByPlaceholderText('•••');
    await userEvent.type(securityCode, '123', { delay: 100 });

    const passwordInputs = canvas.getAllByPlaceholderText('•');
    await userEvent.type(passwordInputs[0], '1', { delay: 100 });
    await userEvent.type(passwordInputs[1], 'b', { delay: 100 });

    const passwordErrorMessage = canvas.getByText(ERROR.IS_NOT_NUMBER);
    expect(passwordErrorMessage).not.toBeUndefined();

    expect(await submitButton).toBeDisabled();
  },
};

export const FailedWithAllInputs: Story = {
  render: () => {
    return <CardRegisterForm />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const KAKAOCardButton = canvas.findByText('카카오뱅크');
    userEvent.click(await KAKAOCardButton);

    const cardSelectCompleteButton = canvas.findByText('카드사 선택 완료');
    userEvent.click(await cardSelectCompleteButton);

    const submitButton = canvas.findByText('다음');
    expect(await submitButton).toBeDisabled();

    const cardNumberInputs = canvas.getAllByTestId('cardNumberInput');
    await userEvent.type(cardNumberInputs[0], 'abcd', { delay: 100 });
    await userEvent.type(cardNumberInputs[1], 'abcd', { delay: 100 });
    await userEvent.type(cardNumberInputs[2], 'abcd', { delay: 100 });
    await userEvent.type(cardNumberInputs[3], 'abc1', { delay: 100 });

    const expirationMonth = canvas.getByPlaceholderText('MM');
    await userEvent.type(expirationMonth, '00', { delay: 100 });

    const ownerName = canvas.getByPlaceholderText('카드에 표시된 이름과 동일하게 입력하세요.');
    await userEvent.type(ownerName, 'JUN123', { delay: 100 });

    const securityCode = canvas.getByPlaceholderText('•••');
    await userEvent.type(securityCode, '12c', { delay: 100 });

    const passwordInputs = canvas.getAllByPlaceholderText('•');
    await userEvent.type(passwordInputs[0], '1', { delay: 100 });

    userEvent.click(cardNumberInputs[0]);
    expect(await submitButton).toBeDisabled();
  },
};
