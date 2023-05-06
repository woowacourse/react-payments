import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { theme } from 'components/style/theme';
import { useCardForm } from 'hooks/useCardForm';
import { ThemeProvider } from 'styled-components';
import { SecurityCodeInput } from './SecurityCodeInput';
import { ValueAndOnChange } from './types';

const meta = {
  tags: ['autodocs'],
  title: 'SecurityCodeInput',
  component: SecurityCodeInput,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof SecurityCodeInput>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = () => {
  const { cardFormInformation, setCardFormInformation, card, isCardNumberValid, errorMessages } =
    useCardForm();

  const { securityCode } = cardFormInformation;

  const handleSecurityCodeChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setCardFormInformation((prev) => {
      return { ...prev, securityCode: inputValue };
    });
  };

  return (
    <SecurityCodeInput value={securityCode} onChange={handleSecurityCodeChange} width="80px" />
  );
};
