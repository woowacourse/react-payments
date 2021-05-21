import React from 'react';
import { InputContainer } from '.';
import { ValidMessage } from './ValidMessage';
import { NumbersInputContainer } from './NumbersInputContainer';
import { ValidDayInputContainer } from './ValidDayInputContainer';
import { OwnerInputContainer } from './OwnerInputContainer';
import { CvcInputContainer } from './CvcInputContainer';
import { PasswordInputContainer } from './PasswordInputContainer';
import { NickNameInputContainer } from './NickNameInputContainer';

export default {
  title: 'Component/InputContainer',
  component: InputContainer,
  argTypes: {},
};

const Template = (args) => <InputContainer {...args} />;

export const NumbersInput = Template.bind({});
NumbersInput.args = {
  title: '카드 번호',
  children: [
    <ValidMessage validMessage={'카드 번호를 모두 입력해주세요.'} />,
    <NumbersInputContainer />,
  ],
};

export const ValidDayInput = Template.bind({});
ValidDayInput.args = {
  title: '만료일',
  children: [<ValidMessage validMessage={'유효한 날짜가 아닙니다.'} />, <ValidDayInputContainer />],
};

export const OwnerInput = Template.bind({});
OwnerInput.args = {
  title: '카드 소유자 이름 (선택)',
  children: [
    <ValidMessage
      validMessage={'카드의 이름과 다릅니다.'}
      isVisibleTextLength={true}
      textLength={30}
      inputValue={'SUN'}
    />,
    <OwnerInputContainer />,
  ],
};

export const CvcInput = Template.bind({});
CvcInput.args = {
  title: '보안 코드 (CVC/CVV)',
  children: [
    <ValidMessage validMessage={'보안 코드가 정확하지 않습니다.'} />,
    <CvcInputContainer />,
  ],
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  title: '카드 비밀번호',
  children: [
    <ValidMessage validMessage={'비밀번호가 정확하지 않습니다.'} />,
    <PasswordInputContainer />,
  ],
};

export const NickNameInput = Template.bind({});
NickNameInput.args = {
  children: [<NickNameInputContainer />],
};
