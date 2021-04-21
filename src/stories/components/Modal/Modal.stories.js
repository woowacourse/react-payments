import React from 'react';
import Modal from './Modal';

//TODO: modal event, stories에서 Action 넣기
export default {
  title: 'Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
  contents: <div>hello</div>,
};
