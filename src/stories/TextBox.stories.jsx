import React from 'react';
import TextBox from '../components/common/TextBox';

export default {
  title: 'TextBox',
  component: TextBox,
};
const Template = (args) => <TextBox {...args}></TextBox>;

export const DefaultTextBox = Template.bind({});
DefaultTextBox.args = {
  fontSize: 15,
  children: '컨텐츠 내용',
};

export const Red20TextBox = Template.bind({});
Red20TextBox.args = {
  fontSize: 20,
  children: 'text 내용, 폰트 크기, 색상을 지정할 수 있어요.',
  color: 'red',
};
