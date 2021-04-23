import React from 'react';
import Modal from './Modal';

export default {
  component: Modal,
  title: 'Modal',
};

const ModalTemplate = (args) => <Modal {...args} />;
export const Default = ModalTemplate.bind({});
Default.args = {};
