import { Meta, StoryFn } from "@storybook/react";
import Form from "../components/Form/Form";

export default {
  title: "Form",
  component: Form,
} as Meta;

const Template: StoryFn = () => (
  <Form
    setCardNumbers={() => {}}
    setExpirationDate={() => {}}
    setUserName={() => {}}
  />
);

export const Default = Template.bind({});
