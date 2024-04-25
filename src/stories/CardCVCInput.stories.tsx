import CardCVCInput from "../components/payment/CardEnrollForm/CardCVCInput";
import { Meta } from "@storybook/react";

export default {
  title: "Components/CardCVCInput",
  component: CardCVCInput,
} as Meta;

const Template = () => <CardCVCInput />;

export const Default = Template.bind({});
