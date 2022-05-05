import UserNameContainer from "./UserNameContainer.component";

export default {
  title: "UserNameContainer",
  component: UserNameContainer,
};

export const DefaultUserNameContainer = (args) => (
  <UserNameContainer {...args} />
);

DefaultUserNameContainer.args = {};
