import { Meta, StoryFn } from "@storybook/react";
import Form from "../components/Form/Form";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Form",
  component: Form,
  decorators: [(Story) => <MemoryRouter>{Story()}</MemoryRouter>],
} as Meta;

const Template: StoryFn = () => (
  <Form
    cardNumbers={[]}
    setCardNumbers={() => []}
    expirationDate={[]}
    setExpirationDate={() => []}
    userName={[]}
    setUserName={() => []}
    cardCompany={[]}
    setCardCompany={() => []}
    cardCVC={[]}
    setCardCVC={() => []}
    cardPassword={[]}
    setCardPassword={() => []}
    setFocusedField={() => []}
  />
);

export const Default = Template.bind({});
