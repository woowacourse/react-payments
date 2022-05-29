import { withReactContext } from "storybook-react-context";
import { action } from "@storybook/addon-actions";

import HomePage from "pages/HomePage/HomePage.pages";
import { CardDataContext } from "provider/CardDataProvider";
import defaultCardData from "mock/cardData";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Pages/HomePage",
  component: HomePage,
} as Meta;

const Template: Story = (args) => <HomePage {...args} />;

export const DefaultHomePage = Template.bind({});
DefaultHomePage.args = {};

export const ExistCardHomePage = Template.bind({});
ExistCardHomePage.decorators = [
  withReactContext({
    Context: CardDataContext,
    initialState: { ...defaultCardData, dispatch: action("dispatch") },
  }),
];
