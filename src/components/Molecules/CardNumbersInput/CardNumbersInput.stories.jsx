import React from 'react';
import CardNumbersInput from '.';
import useCardNumbers from 'hooks/useCardNumbers';
import MESSAGE from 'constant/message';
import { validInputCasePlay, notNumberInputCasePlay } from './CardNumbersInput.play';

export default {
  title: 'Molecules/CardNumbersInput',
  component: CardNumbersInput,
  argTypes: {
    cardNumbers: {
      table: {
        disable: true,
      },
    },
    handleInputChange: {
      table: {
        disable: true,
      },
    },
    isValid: {
      table: {
        disable: true,
      },
    },
    invalidMessage: {
      table: {
        disable: true,
      },
    },
    width: { defaultValue: '318px', control: { type: 'text' } },
  },
};

const Template = args => {
  const { cardNumbers, isValidCardNumbers, handleChangeCardNumbersInput } = useCardNumbers();

  return (
    <CardNumbersInput
      cardNumbers={cardNumbers}
      handleInputChange={handleChangeCardNumbersInput}
      isValid={isValidCardNumbers}
      invalidMessage={MESSAGE.INVALID_CARD_NUMBER}
      width={'318px'}
      {...args}
    />
  );
};

export const Default = Template.bind({});

export const ValidInputCase = Template.bind({});

ValidInputCase.play = validInputCasePlay;

export const NotNumberInputCase = Template.bind({});

NotNumberInputCase.play = notNumberInputCasePlay;
