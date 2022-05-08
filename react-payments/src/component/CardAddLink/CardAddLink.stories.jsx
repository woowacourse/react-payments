import CardAddLink from "./CardAddLink.component";

export default {
  title: "CardAddLink",
  component: CardAddLink,
};

export const DefaultCardAddLink = (args) => (
  <CardAddLink {...args} to="/add">
    +
  </CardAddLink>
);

DefaultCardAddLink.args = {};
