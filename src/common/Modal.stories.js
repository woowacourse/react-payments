import React from 'react';
import Modal from './Modal';

export default {
  component: Modal,
  title: 'Modal',
};

const Template = (args) => {
  const { children, ...restArgs } = args;
  return <Modal {...restArgs}>{children}</Modal>;
};

export const Default = Template.bind({});
Default.args = {
  children: <div>모달내컴포넌트</div>,
  handleModalClose: () => {},
};
