import { Input, UnderlinedInput } from '../components';

import { CARD_RULE, NOW } from '../constants';

export default {
  title: 'Example/Input',
  component: Input,
};

function BasicTemplate(args) {
  return <Input {...args} />;
}

const CardNumber = BasicTemplate.bind({});
CardNumber.args = {
  description: '카드 번호',
  maxLength: CARD_RULE.NUMBER_MAX_LENGTH,
};

const ValidDate = BasicTemplate.bind({});
ValidDate.args = {
  description: '만료일',
  width: '137px',
  type: 'month',
  min: `${NOW.YEAR}-${NOW.MONTH}`,
  maxLength: CARD_RULE.VALID_DATE_MAX_LENGTH,
};

const CardOwnerName = BasicTemplate.bind({});
CardOwnerName.args = {
  description: '카드 소유자 이름 (선택)',
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  maxLength: CARD_RULE.OWNER_NAME_MAX_LENGTH,
};

const CVC = BasicTemplate.bind({});
CVC.args = {
  description: '보안 코드(CVC/CVV)',
  type: 'password',
  width: '84px',
  maxLength: CARD_RULE.CVC_LENGTH,
};

const CardPasswordLabeled = BasicTemplate.bind({});
CardPasswordLabeled.args = {
  description: '카드 비밀번호',
  type: 'password',
  width: '43px',
  maxLength: 1,
};

const CardPasswordNoLabeled = BasicTemplate.bind({});
CardPasswordNoLabeled.args = {
  type: 'password',
  width: '43px',
  maxLength: 1,
};

function UnderlinedTemplate(args) {
  return <UnderlinedInput {...args} />;
}

const Underlined = UnderlinedTemplate.bind({});
Underlined.args = {
  padding: { b: '5px' },
  width: '250px',
};

export {
  CardNumber,
  ValidDate,
  CardOwnerName,
  CVC,
  CardPasswordLabeled,
  CardPasswordNoLabeled,
  Underlined,
};
