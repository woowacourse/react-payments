import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { theme } from 'components/style/theme';
import { useCardForm } from 'hooks/useCardForm';
import { ThemeProvider } from 'styled-components';
import { ExpirationDateInput } from './ExpirationDateInput';
import { ValueAndOnChange } from './types';

const meta = {
  tags: ['autodocs'],
  title: 'ExpirationDateInput',
  component: ExpirationDateInput,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = (args) => {
  const { cardFormInformation, setCardFormInformation, card, isCardNumberValid, errorMessages } =
    useCardForm();
  const { month, year } = cardFormInformation;

  const handleMonthInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setCardFormInformation((prev) => {
      return { ...prev, month: inputValue };
    });
  };

  const handleYearInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setCardFormInformation((prev) => {
      return { ...prev, year: inputValue };
    });
  };

  return (
    <ExpirationDateInput
      month={{ value: month, onChange: handleMonthInputChange }}
      year={{ value: year, onChange: handleYearInputChange }}
      width="70px"
    />
  );
};
