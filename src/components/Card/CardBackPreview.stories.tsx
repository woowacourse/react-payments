import { StoryFn } from "@storybook/react";
import CardBackPreview from "./CardBackPreview";

export default {
  title: "CardPreview/CardBackPreview",
  component: CardBackPreview,
  argTypes: {
    cardCVC: { control: "text" },
  },
};

const Template: StoryFn<typeof CardBackPreview> = (args) => {
  return <CardBackPreview {...args}></CardBackPreview>;
};

export const Default = Template.bind({});
Default.args = {
  cardCVC: "",
};

export const Input = Template.bind({});
Input.args = {
  ...Default.args,
  cardCVC: "123",
};
