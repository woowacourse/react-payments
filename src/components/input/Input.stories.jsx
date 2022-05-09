import Input from 'components/input/Input';
import { CARD } from 'constant/index';
import { validNumber, validMaxLength, validRange } from 'validation/index';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const CardNumberInput = Template.bind({});

CardNumberInput.args = {
  length: CARD.NUMBER_LENGTH,
  value: '',
  updateCard: () => {},
  validators: { validMaxLength, validNumber },
};

export const CardNumberDotInput = Template.bind({});

CardNumberDotInput.args = {
  length: CARD.NUMBER_LENGTH,
  type: 'password',
  value: '',
  updateCard: () => {},
  validators: { validMaxLength, validNumber },
};

export const ExpireDateMonthInput = Template.bind({});

ExpireDateMonthInput.args = {
  placeholder: 'MM',
  length: CARD.DATE.LENGTH,
  value: '',
  min: CARD.DATE.RANGE.MIN,
  max: CARD.DATE.RANGE.MAX,
  updateCard: () => {},
  validators: { validMaxLength, validNumber, validRange },
};

export const ExpireDateYearInput = Template.bind({});

ExpireDateYearInput.args = {
  placeholder: 'YY',
  value: '',
  length: CARD.DATE.LENGTH,
  updateCard: () => {},
  validators: { validMaxLength, validNumber },
};

export const OwnerNameInput = Template.bind({});

OwnerNameInput.args = {
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  length: CARD.NAME_LENGTH,
  value: '',
  updateCard: () => {},
  validators: { validMaxLength },
};

export const SecurityCodeInput = Template.bind({});

SecurityCodeInput.args = {
  size: 'w-25',
  type: 'password',
  length: CARD.SECURITY_CODE_LENGTH,
  value: '',
  updateCard: () => {},
  validators: { validMaxLength, validNumber },
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  size: 'w-15',
  type: 'password',
  length: CARD.PASSWORD_LENGTH,
  value: '',
  updateCard: () => {},
  validators: { validMaxLength, validNumber },
};
