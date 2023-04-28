import type { Meta } from "@storybook/react";

import CardForm from "../../components/CardRegistrationPage/CardForm";
import CardItemProvider from "../../components/provider/CardItemProvider";
import ModalProvider from "../../components/provider/ModalProvider";

const meta = {
  title: "Payment/Form",
  component: CardForm,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CardForm>;

export default meta;

export const Form = () => {
  const onSubmit = () => {};

  return (
    <CardItemProvider>
      <ModalProvider>
        <CardForm onSubmitForm={onSubmit} />
      </ModalProvider>
    </CardItemProvider>
  );
};
