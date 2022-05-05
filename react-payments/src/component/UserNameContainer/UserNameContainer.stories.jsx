import UserNameContainer from "./UserNameInput.component";

export default {
  title: "UserNameContainer",
  component: UserNameContainer,
};

export const DefaultUserNameContainer = (args) => (
  <UserNameContainer {...args} />
);

DefaultUserNameContainer.args = {};
