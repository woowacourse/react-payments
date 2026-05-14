import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import { expect, fn, userEvent, within } from 'storybook/test';

import CardInput from '../components/CardInput';
import { useRegisterCardForm } from '../hooks/useRegisterCardForm';

const meta = {
  title: 'Components/CardInput',
  component: CardInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardInput>;

export default meta;

type Story = StoryObj<typeof meta>;

function CardInputWithState() {
  const registerCardForm = useRegisterCardForm();

  return (
    <div style={{ width: '315px' }}>
      <CardInput {...registerCardForm} />
    </div>
  );
}

export const Interactive: Story = {
  args: {
    cardStatus: {
      cardNumbers: ['', '', '', ''],
      cardNumberErrorMode: 'normal',
      cardBrand: 'unknown',
    },
    onChangeCardNumber: () => fn(),
    onValidateCardNumber: fn(),
    cardExpiry: {
      cardExpiryDate: ['', ''],
      cardExpiryDateErrorMode: 'normal',
    },
    onChangeCardExpiryDate: () => fn(),
    onBlurMonth: fn(),
    onBlurYear: fn(),
    cardCvc: {
      cardCvc: '',
      cardCvcErrorMode: 'normal',
    },
    onChangeCardCvc: fn(),
    onBlurCardCvc: fn(),
    cardPassword: {
      cardPassword: '',
      cardPasswordErrorMode: 'normal',
    },
    onChangeCardPassword: fn(),
    onBlurCardPassword: fn(),
    cardIssuer: '',
    handleCardIssuer: fn(),
    step: 0,
    handleSubmit: fn(),
    isFormValid: false,
  },
  render: () => <CardInputWithState />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText('카드 번호 1번째 입력창'), '4123');
    await userEvent.type(canvas.getByLabelText('카드 번호 2번째 입력창'), '5678');
    await userEvent.type(canvas.getByLabelText('카드 번호 3번째 입력창'), '9875');
    await userEvent.type(canvas.getByLabelText('카드 번호 4번째 입력창'), '1234');

    const issuerSelect = await canvas.findByLabelText('카드사를 선택해 주세요');
    await userEvent.selectOptions(issuerSelect, 'kakaoCard');

    const monthInput = await canvas.findByLabelText('카드 유효기간 월 입력창');
    await userEvent.type(monthInput, '12');
    await userEvent.type(canvas.getByLabelText('카드 유효기간 연도 입력창'), '30');

    const cvcInput = await canvas.findByLabelText('CVC');
    await userEvent.type(cvcInput, '123');

    const passwordInput = await canvas.findByLabelText('비밀번호 앞 2자리');
    await userEvent.type(passwordInput, '12');

    await expect(canvas.getByRole('button', { name: '확인' })).toBeInTheDocument();
  },
};
