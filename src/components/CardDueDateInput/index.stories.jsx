import CardDueDateInput from ".";

const Template = (args) => <CardDueDateInput {...args} />;

export default {
  title: "component/CardDueDateInput",
  component: CardDueDateInput,
};

export const Primary = Template.bind({});
Primary.args = {
  dueDate: { month: "11", year: "23" },
  handleDueDate: () => {},
  error: { month: false, year: false },
};
