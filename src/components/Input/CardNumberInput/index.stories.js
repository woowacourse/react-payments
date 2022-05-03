import React from 'react';
import CardNumberInput from '.';

export default {
  title: 'CardNumberInput',
  component: CardNumberInput,
  argTypes: {
    onChangeFirstCardNumber: {
      table: {
        disable: true,
      },
    },
    onChangeSecondCardNumber: {
      table: {
        disable: true,
      },
    },
    onChangeThirdCardNumber: {
      table: {
        disable: true,
      },
    },
    onChangeFourthCardNumber: {
      table: {
        disable: true,
      },
    },
    firstCardNumber: {
      description: '첫번째 카드 번호 4자리',
      control: {
        type: 'number',
      },
    },
    secondCardNumber: {
      description: '두번째 카드 번호 4자리',
      control: {
        type: 'number',
      },
    },
    thirdCardNumber: {
      description: '세번째 카드 번호 4자리',
      control: {
        type: 'number',
      },
    },
    fourthCardNumber: {
      description: '네번째 카드 번호 4자리',
      control: {
        type: 'number',
      },
    },
  },
};

const Template = (args) => <CardNumberInput {...args} />;

export const Example = Template.bind({});
