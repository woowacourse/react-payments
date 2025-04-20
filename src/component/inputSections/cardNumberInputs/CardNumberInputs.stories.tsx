import type { Dispatch, SetStateAction } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import type { CardInputProps } from "../../../types/CardInputTypes";
import { useErrorMessages } from "../../../hook/useErrorMessages";
import { useState } from "react";
import CardNumberInputs from "./CardNumberInputs";
import { getFirstErrorMessage } from "../../../util/getFirstErrorMessage";
import ERROR_MESSAGE from "../../../constants/errorMessage";
import { within, userEvent } from "@storybook/test";
const meta: Meta<typeof CardNumberInputs> = {
  title: "Components/CardNumberInputs",
  component: CardNumberInputs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CardNumberInputs>;

const renderCardNumberInputs = (
  setCardInput: Dispatch<SetStateAction<CardInputProps>>,
  errorMessages: string,
  handleErrorMessages: (key: keyof CardInputProps, message: string) => void
) => {
  return (
    <CardNumberInputs
      setCardInput={setCardInput}
      errorMessages={errorMessages}
      handleErrorMessages={handleErrorMessages}
    />
  );
};

export const Default: Story = {
  render: () => {
    const Component = () => {
      const [cardInput, setCardInput] = useState<CardInputProps>({
        first: null,
        second: null,
        third: null,
        fourth: null,
        MM: null,
        YY: null,
        CVC: null,
      });
      const { errorMessages, handleErrorMessages } = useErrorMessages();
      const cardErrorMessage = getFirstErrorMessage([
        errorMessages.first,
        errorMessages.second,
        errorMessages.third,
        errorMessages.fourth,
      ]);

      return renderCardNumberInputs(
        setCardInput,
        cardErrorMessage,
        handleErrorMessages
      );
    };

    return <Component />;
  },
};

export const InputError: Story = {
  render: () => {
    const Component = () => {
      const [, setCardInput] = useState<CardInputProps>({
        first: null,
        second: null,
        third: null,
        fourth: null,
        MM: null,
        YY: null,
        CVC: null,
      });
      const { errorMessages, handleErrorMessages } = useErrorMessages();

      const cardErrorMessage = getFirstErrorMessage([
        ERROR_MESSAGE.NOT_A_NUMBER,
        errorMessages.second,
        errorMessages.third,
        errorMessages.fourth,
      ]);

      return renderCardNumberInputs(
        setCardInput,
        cardErrorMessage,
        handleErrorMessages
      );
    };

    return <Component />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = await canvas.getAllByPlaceholderText("1234");
    await userEvent.type(inputs[0], "abcd");
  },
};
