import { Meta, Story } from '@storybook/react';

export default {
  title: 'CardCompany',
  component: CardCompany,
} as Meta;

const Template: Story = (args) => <CardCompany {...args} />;

export const BCCardCompany = Template.bind({});
BCCardCompany.args = {
  company: 'BC',
};
