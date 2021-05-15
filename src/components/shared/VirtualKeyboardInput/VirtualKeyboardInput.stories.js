import { useState } from 'react';
import VirtualKeyboardInput from '.';

export default {
  component: VirtualKeyboardInput,
  title: 'Common/VirtualKeyboardInput',
};

const TemplateStorybook = args => {
  const [str, setStr] = useState('');

  return <VirtualKeyboardInput state={str} setState={setStr} {...args} />;
};

export const Default = TemplateStorybook.bind({});

Default.args = {};
