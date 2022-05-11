import React from 'react';
import Form from '../components/common/Form';
import Input from '../components/common/Input';
import InputField from './../components/common/InputField';
import Button from '../components/common/Button';

export default {
  title: 'Component/Form',
  component: Form,
};

const onSubmitSampleForm = e => {
  e.preventDefault();
  alert('SampleForm Submit!');
};

const Example = args => (
  <Form onSubmit={onSubmitSampleForm}>
    <InputField labelText="Sample Form label 1">
      <Input placeholder="Sample Form Input 1" width="200px" />
    </InputField>
    <InputField labelText="Sample Form label 2">
      <Input placeholder="Sample Form Input 2" width="200px" />
    </InputField>
    <Button>Submit</Button>
  </Form>
);

export const Default = Example.bind({});
Default.args = {};
