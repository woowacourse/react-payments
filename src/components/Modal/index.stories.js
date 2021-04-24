import React from 'react';
import { Modal } from '..';
import { CardCompanyList } from '../../pages/AddCardPages/AddFormPage/CardCompanySelectModal';

export default {
  title: 'Component/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const BottomModal = Template.bind({});
BottomModal.args = {
  isOpen: true,
  className: 'ModalInner--bottom',
  children: <CardCompanyList />,
};
