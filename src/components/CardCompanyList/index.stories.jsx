import CardCompanyList from '.';

export default {
  title: 'Component/CardCompanyList',
  component: CardCompanyList,
  parameters: {
    layout: 'centered',
  },
};

const Template = () => {
  return <CardCompanyList />;
};

export const Default = Template.bind({});
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
