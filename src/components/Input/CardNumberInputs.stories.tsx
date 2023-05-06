import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { theme } from 'components/style/theme';
import { useCardForm } from 'hooks/useCardForm';
import { ThemeProvider } from 'styled-components';
import { CardNumberInputs } from './CardNumberInputs';
import { ValueAndOnChange } from './types';

const meta = {
  tags: ['autodocs'],
  title: 'CardNumberInputs',
  component: CardNumberInputs,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof CardNumberInputs>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = (args) => {
  const { cardFormInformation, setCardFormInformation, card, isCardNumberValid, errorMessages } =
    useCardForm();

  const valueAndOnChanges: ValueAndOnChange[] = cardFormInformation.cardNumbers.map(
    (cardNumber, index) => ({
      value: cardNumber,
      onChange: (value) => {
        setCardFormInformation((prev) => {
          const prevCardNumbers = [...prev.cardNumbers];
          prevCardNumbers.splice(index, 1, value);

          return {
            ...prev,
            cardNumbers: prevCardNumbers,
          };
        });
      },
    })
  );

  return <CardNumberInputs valueAndOnChanges={valueAndOnChanges} />;
};
