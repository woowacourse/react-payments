import { Card } from '../components';

export default {
  title: 'Example/Card',
  component: Card,
};

function Template(args) {
  return <Card {...args} />;
}

const Default = Template.bind({});
Default.args = {
  bgColor: '#D2D2D2',
};

const Large = Template.bind({});
Large.args = {
  bgColor: '#D2D2D2',
  size: 'large',
};

const Entered = Template.bind({});
Entered.args = {
  bgColor: '#ADD8E6',
  name: 'HALEE',
  number: '1111 2222 •••• ••••',
  validDate: '05/22',
};

export { Default, Large, Entered };
