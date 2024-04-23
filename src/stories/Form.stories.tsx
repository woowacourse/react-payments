import { Meta, StoryFn } from "@storybook/react";
import Form from "../components/Form/Form";

export default {
  title: "Form",
  component: Form,
} as Meta;

const Template: StoryFn = () => (
  <Form
    cardNumbers={[]}
    setCardNumbers={() => []}
    expirationDate={[]}
    setExpirationDate={() => []}
    userName={[]}
    setUserName={() => []}
  />
);

export const Default = Template.bind({});
