import CardPasswordInput from "../../components/payment/CardEnrollForm/CardPasswordInput";
import { Meta } from "@storybook/react";

export default {
  title: "Components/CardPasswordInput",
  component: CardPasswordInput,
} as Meta;

const Template = () => <CardPasswordInput />;

export const Default = Template.bind({});
