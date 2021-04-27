import React from 'react';
import Modal from '.';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
  contents: <div>hello</div>,
};
