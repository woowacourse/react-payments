import EditNicknamePage from '.';

export default {
  component: EditNicknamePage,
  title: 'Pages/EditNicknamePage',
};

const Template = args => {
  return <EditNicknamePage {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
