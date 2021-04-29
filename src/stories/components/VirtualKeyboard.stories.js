import VirtualKeyboard from '../../components/cardCreation/virtualKeyboard/VirtualKeyboard';

export default {
  title: 'Components/VirtualKeyboard',
  component: VirtualKeyboard,
};

const Template = args => <VirtualKeyboard {...args} />;

export const Default = Template.bind({});
Default.args = {};
