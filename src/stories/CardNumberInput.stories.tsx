import { StoryFn } from "@storybook/react";
import { CardNumberInput } from "../components/CardNumberInput";

export default {
  title: "CardNumberInput",
  component: CardNumberInput,
};

const Template: StoryFn<typeof CardNumberInput> = (): React.ReactElement => (
  <CardNumberInput />
);

export const Example = Template.bind({});
