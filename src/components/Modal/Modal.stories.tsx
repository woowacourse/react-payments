/* eslint-disable react/function-component-definition */
import { Story, Meta } from '@storybook/react';

import { ModalProps } from './type';

import Modal from '.';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;
export const disAbleBackdropClickModal = Template.bind({});
Template.args = {
  isAbleBackdropClick: false,
};
