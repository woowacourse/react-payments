import CardPasswordField from '.';

export default {
  title: 'Component/CardPasswordField',
  component: CardPasswordField,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <CardPasswordField {...args} />;

export const DefaultCardPasswordField = Template.bind({});
