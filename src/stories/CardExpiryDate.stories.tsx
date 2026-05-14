import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import CardExpiryDate from '../components/CardExpiryDate';
import { useExpiryDate } from '../hooks/useExpiryDate';

const meta = {
  title: 'Components/CardExpiryDate',
  component: CardExpiryDate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardExpiryDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['', ''],
      cardExpiryDateErrorMode: 'normal',
    },
    onChangeCardExpiryDate: () => fn(),
    onBlurMonth: fn(),
    onBlurYear: fn(),
  },
};

export const Filled: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['12', '11'],
      cardExpiryDateErrorMode: 'normal',
    },
    onChangeCardExpiryDate: () => fn(),
    onBlurMonth: fn(),
    onBlurYear: fn(),
  },
};

export const EmptyBothError: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['', ''],
      cardExpiryDateErrorMode: 'emptyBoth',
    },
    onChangeCardExpiryDate: () => fn(),
    onBlurMonth: fn(),
    onBlurYear: fn(),
  },
};

export const EmptyMonthError: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['', '22'],
      cardExpiryDateErrorMode: 'emptyMonth',
    },
    onChangeCardExpiryDate: () => fn(),
    onBlurMonth: fn(),
    onBlurYear: fn(),
  },
};

export const EmptyYearError: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['10', ''],
      cardExpiryDateErrorMode: 'emptyYear',
    },
    onChangeCardExpiryDate: () => fn(),
    onBlurMonth: fn(),
    onBlurYear: fn(),
  },
};

export const Interactive: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['', ''],
      cardExpiryDateErrorMode: 'normal',
    },
    onChangeCardExpiryDate: () => fn(),
    onBlurMonth: fn(),
    onBlurYear: fn(),
  },
  render: () => {
    const [cardExpiry, setCardExpiry] = useExpiryDate();

    return (
      <div>
        <CardExpiryDate
          cardExpiry={cardExpiry}
          onChangeCardExpiryDate={setCardExpiry.handleCardExpiryDate}
          onBlurMonth={setCardExpiry.handleMonthBlur}
          onBlurYear={setCardExpiry.handleYearBlur}
        />

        <div data-testid="card-expiry-value" style={{ marginTop: '16px' }}>
          입력값: {cardExpiry.cardExpiryDate.join('/')}
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByLabelText('카드 유효기간 월 입력창');
    const yearInput = canvas.getByLabelText('카드 유효기간 연도 입력창');

    await userEvent.type(monthInput, '12');
    await userEvent.type(yearInput, '30');

    await expect(monthInput).toHaveValue('12');
    await expect(yearInput).toHaveValue('30');
    await expect(canvas.getByTestId('card-expiry-value')).toHaveTextContent('12/30');
  },
};
