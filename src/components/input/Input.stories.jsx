import Input from './Input';
import { MAX_LENGTH, MIN_LENGTH, RANGE } from '../../constants';
import { isOverMaxLength, isOutOfRange } from '../../util';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const CardNumberInput = Template.bind({});

CardNumberInput.args = {
  length: MAX_LENGTH.CARD_NUMBER,
  updateCardForm: () => {},
  validators: { isOverMaxLength, isNaN: Number.isNaN },
};

export const ExpireDateMonthInput = Template.bind({});

ExpireDateMonthInput.args = {
  placeholder: 'MM',
  length: MAX_LENGTH.DATE,
  minLength: MIN_LENGTH.MONTH,
  min: RANGE.MONTH_MIN,
  max: RANGE.MONTH_MAX,
  updateCardForm: () => {},
  validators: { isOverMaxLength, isNaN: Number.isNaN, isOutOfRange },
};

export const ExpireDateYearInput = Template.bind({});

ExpireDateYearInput.args = {
  placeholder: 'YY',
  length: MAX_LENGTH.DATE,
  updateCardForm: () => {},
  validators: { isOverMaxLength, isNaN: Number.isNaN },
};

export const OwnerNameInput = Template.bind({});

OwnerNameInput.args = {
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  length: MAX_LENGTH.NAME,
  minLength: MIN_LENGTH.NAME,
  updateNameLength: () => {},
  updateCardForm: () => {},
  validators: { isOverMaxLength },
};

export const SecurityCodeInput = Template.bind({});

SecurityCodeInput.args = {
  size: 'w-25',
  type: 'password',
  length: MAX_LENGTH.SECURITY_CODE,
  updateCardForm: () => {},
  validators: { isOverMaxLength, isNaN: Number.isNaN },
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  size: 'w-15',
  type: 'password',
  length: MAX_LENGTH.PASSWORD,
  updateCardForm: () => {},
  validators: { isOverMaxLength, isNaN: Number.isNaN },
};
