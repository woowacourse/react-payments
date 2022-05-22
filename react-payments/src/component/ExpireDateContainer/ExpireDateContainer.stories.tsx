import ExpireDateContainer from "component/ExpireDateContainer/ExpireDateContainer.component";

export default {
  title: "ExpireDateContainer",
  component: ExpireDateContainer,
};

export const DefaultExpireDateContainer = (args) => (
  <ExpireDateContainer {...args} />
);

DefaultExpireDateContainer.args = {};
