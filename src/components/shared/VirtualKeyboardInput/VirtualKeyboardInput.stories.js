import { useState } from 'react';
import VirtualKeyboardNumberInput from '.';

export default {
  component: VirtualKeyboardNumberInput,
  title: 'Common/VirtualKeyboardInput',
};

const TemplateStorybook = args => {
  const [str, setStr] = useState('');

  return <VirtualKeyboardNumberInput state={str} setState={setStr} {...args} />;
};

export const Default = TemplateStorybook.bind({});

Default.args = {};
