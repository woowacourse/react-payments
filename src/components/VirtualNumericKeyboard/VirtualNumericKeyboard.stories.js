import Button from '../Button/Button';
import VirtualNumericKeyboard from './VirtualNumericKeyboard';

export default {
  title: 'Payments/VirtualNumericKeyboard',
  component: VirtualNumericKeyboard,
  argTypes: {},
};

const Template = (args) => <VirtualNumericKeyboard {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  // eslint-disable-next-line react/no-array-index-key
  children: [...Array(10)].map((_, i) => <Button key={i}>{i}</Button>),
};
