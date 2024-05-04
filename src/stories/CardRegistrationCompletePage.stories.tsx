import { MemoryRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import CardRegistrationCompletePage from "../components/CardRegistrationCompletePage";

export default {
  title: "CardRegistrationCompletePage",
  component: CardRegistrationCompletePage,
  decorators: [
    (Story) => (
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/CardRegistrationCompletePage",
            state: { cardNumbers: ["1234"], cardCompany: "국민카드" },
          },
        ]}
      >
        {Story()}
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: StoryFn<typeof CardRegistrationCompletePage> = () => (
  <CardRegistrationCompletePage />
);

export const Default = Template.bind({});
