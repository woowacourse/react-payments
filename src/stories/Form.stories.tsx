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
    cardOwner={[]}
    setCardOwner={() => []}
    cardCompany={
      "BC카드 | 신한카드 | 카카오뱅크 | 현대카드 | 우리카드 | 롯데카드 | 하나카드 | 국민카드"
    }
    setCardCompany={() => []}
    cardCVC={[]}
    setCardCVC={() => []}
    cardPassword={[]}
    setCardPassword={() => []}
    setFocusedField={() => []}
  />
);

export const Default = Template.bind({});
