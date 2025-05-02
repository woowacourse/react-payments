import type { Meta, StoryObj } from "@storybook/react";
import PasswordInput from "../components/PasswordInput/PasswordInput";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import ERROR from "../constants/errorMessage";
import { CARD_VALIDATION_INFO } from "../constants/cardValidationInfo";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          `🕵🏻‍♀️ PasswordInput은 ${CARD_VALIDATION_INFO.PASSWORD_MAX_LENGTH}자리 숫자만 입력 가능한 카드 비밀번호 앞 두 자리 필드입니다. 숫자가 아닌 값 입력, 자릿수 부족 등의 예외 처리를 포함하고 있습니다.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template = () => {
  return <PasswordInput />;
};

export const Valid_PasswordInput: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const passwordInput = canvas.getByPlaceholderText("12");

    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, "11");

    await expect(
      canvas.queryByText(ERROR.REQUIRE.NUMBER),
    ).not.toBeInTheDocument();

    await expect(
      canvas.queryByText(
        `${CARD_VALIDATION_INFO.PASSWORD_MAX_LENGTH}${ERROR.REQUIRE}`,
      ),
    ).not.toBeInTheDocument();
  },
};

export const Invalid_NonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const passwordInput = canvas.getByPlaceholderText("12");

    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, "ab");

    await expect(
      canvas.findByText(ERROR.REQUIRE.NUMBER),
    ).resolves.toBeInTheDocument();
  },
};

export const Invalid_NumberLength: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const passwordInput = canvas.getByPlaceholderText("12");

    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, "1");

    await expect(
      canvas.findByText(
        `${CARD_VALIDATION_INFO.PASSWORD_MAX_LENGTH}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
      ),
    ).resolves.toBeInTheDocument();
  },
};
