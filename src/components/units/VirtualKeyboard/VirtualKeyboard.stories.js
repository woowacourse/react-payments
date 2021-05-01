/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { createPortal } from 'react-dom';

import VirtualKeyboard from './index';

export default {
  title: 'units/VirtualKeyboard',
  component: VirtualKeyboard,
};

const keyboardElem = document.createElement('div');
keyboardElem.setAttribute('id', 'keyboard');
document.querySelector('body').append(keyboardElem);

const KeyboardPortal = ({ children }) => createPortal(children, document.getElementById('keyboard'));

const Template = (args) => (
  <KeyboardPortal>
    <VirtualKeyboard {...args} />
  </KeyboardPortal>
);

export const Default = Template.bind({});
Default.args = {};
