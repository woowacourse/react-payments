import React from "react";
import WordCounter from "./WordCounter";

export default {
  title: "UI Components/WordCounter",
  component: WordCounter,
  decorators: [
    (Story) => (
      <div style={{ position: "relative" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <WordCounter {...args} />;

export const Default = Template.bind({});
Default.args = {
  currLength: 0,
  maxLength: 30,
  state: "default",
};

export const Error = Template.bind({});
Error.args = {
  currLength: 0,
  maxLength: 30,
  state: "error",
};

export const Complete = Template.bind({});
Complete.args = {
  currLength: 0,
  maxLength: 30,
  state: "complete",
};
