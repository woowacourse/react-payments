import AddCard from "./AddCard";

export default {
  title: "AddCard",
  component: AddCard,
};

const Template = (args) => <AddCard {...args} />;
export const AddCardTemplate = Template.bind({});
AddCardTemplate.args = {};
