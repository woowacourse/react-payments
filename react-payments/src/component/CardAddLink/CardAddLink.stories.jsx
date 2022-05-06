import CardAddLink from "./CardAddLink";

export default {
  title: "CardAddLink",
  component: CardAddLink,
};

const Template = (args) => (
  <CardAddLink {...args} to="/add">
    +
  </CardAddLink>
);

export const DefaultCardAddLink = Template.bind({});
DefaultCardAddLink.args = {};
