import { Meta } from "@storybook/react";
import NameInput from "pages/RegisterPage/FormInputs/NameInput";
import CardInfoProvider from "components/provider/CardInfoProvider";

const meta = {
  component: NameInput,
  title: "Form Inputs/Name",
} satisfies Meta<typeof NameInput>;

export default meta;

export const Name = () => {
  return (
    <CardInfoProvider>
      <NameInput />
    </CardInfoProvider>
  );
};
