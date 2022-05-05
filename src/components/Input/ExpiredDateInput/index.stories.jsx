import ExpiredDateInput from '.';

export default {
  title: 'ExpiredDateInput',
  component: ExpiredDateInput,
  argTypes: {
    onChangeExpiredMonth: {
      table: {
        disable: true,
      },
    },
    onChangeExpiredYear: {
      table: {
        disable: true,
      },
    },
    expiredMonth: {
      description: '만료일 월(Month)',
      control: {
        type: 'number',
      },
    },
    expiredYear: {
      description: '만료일 년도(Year)',
      control: {
        type: 'number',
      },
    },
  },
};

const Template = (args) => <ExpiredDateInput {...args} />;

export const Example = Template.bind({});
