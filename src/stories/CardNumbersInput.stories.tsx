import type { Meta, StoryObj } from "@storybook/react";
import CardNumbersInput from "../components/CardNumbersInput/CardNumbersInput";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import ERROR from "../constants/errorMessage";
import { CARD_VALIDATION_INFO } from "../constants/CardValidationInfo";

const meta: Meta<typeof CardNumbersInput> = {
  title: "Components/CardNumbersInput",
  component: CardNumbersInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "💳 `CardNumbersInput` 컴포넌트는 카드 번호를 입력받는 UI로, 일반적으로 4자리씩 나누어진 4개의 입력 필드로 구성됩니다.\n\n" +
          "- 총 16자리 숫자 입력 (4자리 * 4칸)\n" +
          "- 각 칸은 최대 4자리 숫자만 허용되며, 숫자가 아닌 값 또는 자릿수 부족 입력 시 에러 메시지가 표시됩니다.\n" +
          "- 첫 번째 블록의 입력값을 기준으로 카드사를 식별할 수 있도록 처리할 수 있습니다 (예: 4로 시작하면 VISA 등).\n",
      },
    },
  },
  argTypes: {
    cardNumbers: {
      description:
        "각 입력 칸에 입력된 카드 번호 배열 (총 4개, 각각 최대 4자리 숫자)",
      control: false,
    },
    setCardNumbers: {
      description: "카드 번호 배열을 업데이트하는 setter 함수",
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardNumbersInput>;

const Template = () => {
  return (
    <CardNumbersInput />
  );
};

export const Valid_CardNumbersInput: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = canvas.getAllByPlaceholderText("1234");

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], "4123");

    await userEvent.clear(inputs[1]);
    await userEvent.type(inputs[1], "5678");

    await userEvent.clear(inputs[2]);
    await userEvent.type(inputs[2], "3333");

    await userEvent.clear(inputs[3]);
    await userEvent.type(inputs[3], "8765");

    await expect(
      canvas.queryByText(ERROR.CARD_NUMBER.INVALID),
    ).not.toBeInTheDocument();
  },
};

export const InvalidCardPrefix: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByPlaceholderText("1234");

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], "60");

    await expect(
      canvas.findByText(ERROR.CARD_NUMBER.INVALID),
    ).resolves.toBeInTheDocument();
  },
};

export const InvalidCard_NonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByPlaceholderText("1234");

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], "dkdk");

    await expect(
      canvas.findByText(ERROR.REQUIRE.NUMBER),
    ).resolves.toBeInTheDocument();
  },
};

export const InvalidCard_TooShort_FirstBlock: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByPlaceholderText("1234");

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], "412");

    await expect(
      canvas.findByText(
        `${CARD_VALIDATION_INFO.CARD_MAX_LENGTH}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
      ),
    ).resolves.toBeInTheDocument();
  },
};

export const InvalidCard_TooShort_ThirdBlock: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = canvas.getAllByPlaceholderText("1234");

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], "4123");

    await userEvent.clear(inputs[1]);
    await userEvent.type(inputs[1], "5678");

    await userEvent.clear(inputs[2]);
    await userEvent.type(inputs[2], "333");

    await expect(
      canvas.findByText(
        `${CARD_VALIDATION_INFO.CARD_MAX_LENGTH}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
      ),
    ).resolves.toBeInTheDocument();
  },
};
