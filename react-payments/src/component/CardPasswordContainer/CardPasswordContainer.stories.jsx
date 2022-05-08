import CardPasswordContainer from "./CardPasswordContainer.component";

export default {
  title: "CardPasswordContainer",
  component: CardPasswordContainer,
};

export const DefaultCardPasswordContainer = (args) => (
  <CardPasswordContainer {...args} />
);

DefaultCardPasswordContainer.args = {};
