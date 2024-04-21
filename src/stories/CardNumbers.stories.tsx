import { Meta, StoryFn } from "@storybook/react";
import CardNumbers from "../components/Card/CardNumbers";

const meta: Meta = {
  title: "CardNumbers",
  component: CardNumbers,
};

export default meta;

type Args = {
  cardNumbers: Map<string, string>;
};

const Template: StoryFn<Args> = (args) => (
  <CardNumbers cardNumbers={args.cardNumbers} />
);

export const Default = Template.bind({});
Default.args = {
  cardNumbers: new Map<string, string>([
    ["0", "4113"],
    ["1", "5678"],
    ["2", "9012"],
    ["3", "3456"],
  ]),
};
