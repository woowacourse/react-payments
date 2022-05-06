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

export const DefaultCardExpireDateField = Template.bind({});
DefaultCardExpireDateField.parameters = {
  controls: { hideNoControlsWarning: true },
};
