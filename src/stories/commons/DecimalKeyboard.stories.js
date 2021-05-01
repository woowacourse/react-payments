import { DecimalKeyboard } from '../../components/commons/keyboard/DecimalKeyboard';

export default {
  title: 'Commons/Decimal Keyboard',
  component: DecimalKeyboard,
  argTypes: {},
};

const Template = args => <DecimalKeyboard {...args}></DecimalKeyboard>;

export const Default = Template.bind({});
Default.args = {
  closeKeyboard: () => {},
  setInput: () => {},
};
