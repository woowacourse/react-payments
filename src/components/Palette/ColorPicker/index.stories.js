import ColorPicker from '.';
import { COLOR_NAMES } from '../../../constant';

export default {
  title: 'ColorPicker',
  component: ColorPicker,
  argTypes: {
    color: {
      options: COLOR_NAMES,
    },
  },
};

const Template = (args) => <ColorPicker {...args} />;

export const Example = Template.bind({});

Example.args = {
  color: 'red',
  name: '포코카드',
};
