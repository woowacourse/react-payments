import type { Meta, StoryObj } from "@storybook/react";
import CVCInputs from "./CVCInputs";
import { type Dispatch, type SetStateAction, useState } from "react";
import type { CardInputProps } from "../../../types/CardInputTypes";
import { useErrorMessages } from "../../../hook/useErrorMessages";
import { getFirstErrorMessage } from "../../../util/getFirstErrorMessage";
import ERROR_MESSAGE from "../../../constants/errorMessage";
import { within, userEvent } from "@storybook/test";
const meta: Meta<typeof CVCInputs> = {
  title: "Components/CVCInputs",
  component: CVCInputs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CVCInputs>;

const renderCVCInputs = (
  setCardInput: Dispatch<SetStateAction<CardInputProps>>,
  errorMessages: string,
  handleErrorMessages: (key: keyof CardInputProps, message: string) => void
) => {
  return (
    <CVCInputs
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

      return renderCVCInputs(
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

      return renderCVCInputs(
        setCardInput,
        cardErrorMessage,
        handleErrorMessages
      );
    };

    return <Component />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = await canvas.getByPlaceholderText("123");
    await userEvent.type(inputs, "abcd");
  },
};
