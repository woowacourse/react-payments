import CardCompanyButton from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CompanyName, CompanyColor } from 'types/index';

interface Args {
  color: CompanyColor;
  name: CompanyName;
}

export default {
  title: 'Atoms/CardCompanyButton',
  component: CardCompanyButton,
  argTypes: {
    handleClickCardCompany: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof CardCompanyButton>;

const Template: ComponentStory<typeof CardCompanyButton> = (args: Args) => {
  const handleClickCardCompany = action('clickButton');

  return <CardCompanyButton handleClickCardCompany={handleClickCardCompany} {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  color: '#E24141',
  name: '포코카드',
};
