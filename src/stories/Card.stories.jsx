import { Card } from 'components';

export default {
  title: 'Components/Card',
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  bgColor: '#D2D2D2',
  size: 'medium',
};
