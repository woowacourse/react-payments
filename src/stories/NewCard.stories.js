import React from "react";

import { NewCard } from "components/common/NewCard";

export default {
  title: "Example/NewCard",
  component: NewCard,
};

const Template = (args) => <NewCard {...args} />;

export const NewCardTemplate = Template.bind({});
NewCardTemplate.args = {};
