import { Card } from 'components';

export default {
  title: 'Components/Card',
};

function Template(args) {
  return <Card {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  bgColor: '#D2D2D2',
  size: 'medium',
};
