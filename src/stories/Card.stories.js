import { CARD_SIZE, Card } from '../components/commons/card/Card';
import { COLOR } from '../constants/color';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    children: { control: 'text' },
    backgroundColor: {
      options: COLOR,
      control: { type: 'select' },
    },
  },
};

const Template = args => <Card {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  size: CARD_SIZE.MD,
  color: COLOR.LIGHT_GRAY,
};

export const Large = Template.bind({});
Large.args = {
  size: CARD_SIZE.LG,
  color: COLOR.LIGHT_GRAY,
};
