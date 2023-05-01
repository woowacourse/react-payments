import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { theme } from 'components/style/theme';
import { useCardForm } from 'hooks/useCardForm';
import { ThemeProvider } from 'styled-components';
import { PasswordInput } from './PasswordInput';
import { ValueAndOnChange } from './types';

const meta = {
  tags: ['autodocs'],
  title: 'PasswordInput',
  component: PasswordInput,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = () => {
  const { cardFormInformation, setCardFormInformation, card, isCardNumberValid, errorMessages } =
    useCardForm();

  const { firstDigit, secondDigit } = cardFormInformation;

  const handleFirstPasswordInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setCardFormInformation((prev) => {
      return { ...prev, firstDigit: inputValue };
    });
  };

  const handleSecondPasswordInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setCardFormInformation((prev) => {
      return { ...prev, secondDigit: inputValue };
    });
  };

  return (
    <PasswordInput
      first={{ value: firstDigit, onChange: handleFirstPasswordInputChange }}
      second={{ value: secondDigit, onChange: handleSecondPasswordInputChange }}
      width="50px"
    />
  );
};
