import React from 'react';
import { Button, Container, Form, Input, Label } from '..';

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

export const CardPasswordForm = Template.bind({});
CardPasswordForm.args = {
  children: (
    <>
      <Container>
        <Label>카드 비밀번호</Label>
        <Container>
          <Container classname="AddForm__Container" width="2.8125rem">
            <Input textAlign="center" type="password" value="3" />
          </Container>
          <Container classname="AddForm__Container" width="2.8125rem">
            <Input textAlign="center" type="password" value="3" />
          </Container>
          <Container
            classname="AddForm__Container AddForm__Container--transparent"
            width="2.8125rem"
          >
            <Input disabled textAlign="center" type="password" value="3" />
          </Container>
          <Container
            classname="AddForm__Container AddForm__Container--transparent"
            width="2.8125rem"
          >
            <Input disabled textAlign="center" type="password" value="3" />
          </Container>
        </Container>
      </Container>
      <Button onClick={() => {}}>다음</Button>
    </>
  ),
};

export const CardNicknameForm = Template.bind({});
CardNicknameForm.args = {
  width: '43%',
  children: (
    <>
      <Container classname="NicknameForm__Container">
        <Input color="#383838" textAlign="center" value="엄카" width="15rem" />
      </Container>
      <Button onClick={() => {}}>확인</Button>
    </>
  ),
};
