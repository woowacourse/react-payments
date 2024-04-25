import CardCvcInput from "../components/payment/CardEnrollForm/CardCVCInput";
import { Meta } from "@storybook/react";

export default {
  title: "Components/CardCvcInput",
  component: CardCvcInput,
} as Meta;

const Template = () => <CardCvcInput />;

export const Default = Template.bind({});
