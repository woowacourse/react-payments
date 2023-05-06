import { Meta } from "@storybook/react";
import SecurityCodeInput from "pages/RegisterPage/FormInputs/SecurityCodeInput";
import CardInfoProvider from "components/provider/CardInfoProvider";

const meta = {
  component: SecurityCodeInput,
  title: "Input/SecurityCode",
} satisfies Meta<typeof SecurityCodeInput>;

export default meta;

export const SecurityCode = () => {
  return (
    <CardInfoProvider>
      <SecurityCodeInput />
    </CardInfoProvider>
  );
};
