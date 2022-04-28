import CardExpireDateField from '.';
import 'index.css';

export default {
  title: 'Component/CardExpireDateField',
  component: CardExpireDateField,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <CardExpireDateField {...args} />;

export const DefaultCardExpireDateField = Template.bind({});
DefaultCardExpireDateField.args = {
  expireMonth: '04',
  expireYear: '22',
};
