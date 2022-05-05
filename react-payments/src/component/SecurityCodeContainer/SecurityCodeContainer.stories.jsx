import SecurityCodeContainer from "./SecurityCodeContainer.component";

export default {
  title: "SecurityCodeContainer",
  component: SecurityCodeContainer,
};

export const DefaultSecurityCodeContainer = (args) => (
  <SecurityCodeContainer {...args} />
);

DefaultSecurityCodeContainer.args = {};
