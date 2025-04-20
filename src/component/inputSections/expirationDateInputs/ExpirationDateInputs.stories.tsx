import type { Meta, StoryObj } from "@storybook/react";
import { type Dispatch, type SetStateAction, useState } from "react";
import type { CardInputProps } from "../../../types/CardInputTypes";
import { useErrorMessages } from "../../../hook/useErrorMessages";
import { getFirstErrorMessage } from "../../../util/getFirstErrorMessage";
import ERROR_MESSAGE from "../../../constants/errorMessage";
import { within, userEvent } from "@storybook/test";
import ExpirationDateInputs from "./ExpirationDateInputs";
const meta: Meta<typeof ExpirationDateInputs> = {
  title: "Components/ExpirationDateInputs",
  component: ExpirationDateInputs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ExpirationDateInputs>;

const renderExpirationDateInputs = (
  setCardInput: Dispatch<SetStateAction<CardInputProps>>,
  errorMessages: string,
  handleErrorMessages: (key: keyof CardInputProps, message: string) => void
) => {
  return (
    <ExpirationDateInputs
      setCardInput={setCardInput}
      errorMessages={errorMessages}
      handleErrorMessages={handleErrorMessages}
    />
  );
};

export const Default: Story = {
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
        errorMessages.first,
        errorMessages.second,
        errorMessages.third,
        errorMessages.fourth,
      ]);

      return renderExpirationDateInputs(
        setCardInput,
        cardErrorMessage,
        handleErrorMessages
      );
    };

    return <Component />;
  },
};

export const NumberInputError: Story = {
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

      return renderExpirationDateInputs(
        setCardInput,
        cardErrorMessage,
        handleErrorMessages
      );
    };

    return <Component />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByPlaceholderText("MM");
    await userEvent.type(input, "abcd");
  },
};

export const RangeInputError: Story = {
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
        ERROR_MESSAGE.INVALID_EXPIRATION_YEAR,
        errorMessages.second,
        errorMessages.third,
        errorMessages.fourth,
      ]);

      return renderExpirationDateInputs(
        setCardInput,
        cardErrorMessage,
        handleErrorMessages
      );
    };

    return <Component />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByPlaceholderText("MM");
    await userEvent.type(input, "23");
  },
};
