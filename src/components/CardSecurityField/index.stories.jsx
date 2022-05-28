import CardSecurityField from '.';

export default {
  title: 'Component/CardSecurityField',
  component: CardSecurityField,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <CardSecurityField {...args} />;

export const DefaultCardSecurityField = Template.bind({});
