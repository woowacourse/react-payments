import React from 'react';
import { Button, Form, Input, Label } from '..';

export default {
  title: 'Component/Form',
  component: Form,
  decorators: [
    (Story) => (
      <div style={{ width: '375px', height: '701px', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Form {...args} />;

const CardPasswordInput = (
  <>
    <div className="CardPasswordInput">
      {['filled', 'filled', 'transparent', 'transparent'].map((style, index) => (
        <Input
          key={index}
          container={`CardInfoForm__Input__Filler--${style} CardPasswordInput__Filler`}
          className="CardPasswordInput__Field"
          type="password"
          value="3"
        />
      ))}
    </div>
  </>
);

export const CardPasswordForm = Template.bind({});
CardPasswordForm.args = {
  children: (
    <>
      <Label>카드 비밀번호</Label>
      {CardPasswordInput}
      <Button onClick={() => {}}>다음</Button>
    </>
  ),
};

const NicknameInput = (
  <Input
    className="CardNicknameInput__Field"
    container="CardNicknameInput__Filler--transparent"
    value="엄카"
  />
);

export const CardNicknameForm = Template.bind({});
CardNicknameForm.args = {
  width: '43%',
  children: (
    <>
      {NicknameInput}
      <Button onClick={() => {}}>확인</Button>
    </>
  ),
};
