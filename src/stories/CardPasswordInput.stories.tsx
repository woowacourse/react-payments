import CardPasswordInput from "../components/CardPasswordInput";
import { Meta } from "@storybook/react";

export default {
  title: "Components/CardPasswordInput",
  component: CardPasswordInput,
} as Meta;

const Template = () => <CardPasswordInput />;

export const Default = Template.bind({});
