import { Meta, StoryObj } from '@storybook/react';
import CardNumberInput from '../components/InputComponent/CardNumberInput';
import { action } from '@storybook/addon-actions';
import INPUT_TYPE_CATEGORIES from '../constants/inputType';

export default {
  title: 'Components/CardNumberInput',
  component: CardNumberInput,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ padding: '3rem' }}>{Story()}</div>],
} satisfies Meta<typeof CardNumberInput>;

const Template: StoryObj<typeof CardNumberInput> = {
  args: {
    cardNumbers: {
      cardNumber1: { value: '', errorMessage: '', isError: false },
      cardNumber2: { value: '', errorMessage: '', isError: false },
      cardNumber3: { value: '', errorMessage: '', isError: false },
      cardNumber4: { value: '', errorMessage: '', isError: false },
    },
    handleInput: action('Updated Card Numbers'),
    handleShowComponent: action('Show Next Component'),
  },
};

export const Default = Template;

export const WithError = {
  args: {
    cardNumbers: {
      cardNumber1: {
        value: '12a4',
        errorMessage: '에러 발생',
        isError: true,
      },
      cardNumber2: { value: '', errorMessage: '', isError: false },
      cardNumber3: { value: '', errorMessage: '', isError: false },
      cardNumber4: { value: '', errorMessage: '', isError: false },
    },
  },
};

export const PartiallyFilled = {
  args: {
    cardNumbers: {
      cardNumber1: { value: '1234', errorMessage: '', isError: false },
      cardNumber2: { value: '5678', errorMessage: '', isError: false },
      cardNumber3: { value: '', errorMessage: '', isError: false },
      cardNumber4: { value: '', errorMessage: '', isError: false },
    },
  },
};

export const AllFilled = {
  args: {
    ...Template.args,
    cardNumbers: {
      cardNumber1: { value: '1234', errorMessage: '', isError: false },
      cardNumber2: { value: '5678', errorMessage: '', isError: false },
      cardNumber3: { value: '9012', errorMessage: '', isError: false },
      cardNumber4: { value: '3456', errorMessage: '', isError: false },
    },
  },
};
