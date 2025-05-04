import type { Meta, StoryObj } from "@storybook/react";
import CardExpiryInput from "../components/CardExpiryInput/CardExpiryInput";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import ERROR from "../constants/errorMessage";
import { CARD_VALIDATION_INFO } from "../constants/cardValidationInfo";

const meta: Meta<typeof CardExpiryInput> = {
  title: "Components/CardExpiryInput",
  component: CardExpiryInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "📆 `CardExpiryInput` 컴포넌트는 카드의 유효 기간을 MM / YY 형식으로 입력받는 UI입니다.\n\n" +
          `- 월(MM): ${CARD_VALIDATION_INFO.MIN_VALID_MONTH}~${CARD_VALIDATION_INFO.MAX_VALID_MONTH} 사이의 ${CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}자리 숫자만 허용됩니다.\n` +
          "- 연도(YY): 현재 연도 이상만 허용됩니다. 예를 들어, 현재 연도가 2025년이라면 YY는 최소 `25` 이상이어야 합니다.\n\n" +
          "입력값에 따라 형식 오류, 범위 오류를 검증하며, 숫자만 허용되도록 유효성 검사를 수행합니다.",
      },
    },
  },
  argTypes: {
    month: {
      description: "입력된 카드 유효기간의 월 (MM 형식)",
      control: false,
    },
    setMonth: {
      description: "월(MM) 입력값을 변경하는 setter 함수",
      control: false,
    },
    year: {
      description: "입력된 카드 유효기간의 연도 (YY 형식)",
      control: false,
    },
    setYear: {
      description: "연도(YY) 입력값을 변경하는 setter 함수",
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardExpiryInput>;

const Template = () => {
  return <CardExpiryInput />;
};

export const ValidCardExpiryInput: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText("MM");
    const yearInput = canvas.getByPlaceholderText("YY");

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, "12");

    await userEvent.clear(yearInput);
    await userEvent.type(yearInput, "25");

    await expect(
      canvas.queryByText(ERROR.EXPIRY.INVALID_MONTH),
    ).not.toBeInTheDocument();
    await expect(
      canvas.queryByText(ERROR.EXPIRY.INVALID_YEAR),
    ).not.toBeInTheDocument();
  },
};

export const InvalidMonthNonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText("MM");

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, "ab");

    await expect(
      canvas.findByText(ERROR.REQUIRE.NUMBER),
    ).resolves.toBeInTheDocument();
  },
};

export const InvalidMonthTooShort: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText("MM");

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, "1");

    await expect(
      canvas.findByText(
        `${CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
      ),
    ).resolves.toBeInTheDocument();
  },
};

export const InvalidYearNonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText("MM");
    const yearInput = canvas.getByPlaceholderText("YY");

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, "12");

    await userEvent.clear(yearInput);
    await userEvent.type(yearInput, "ㅁㅁ");

    await expect(
      canvas.findByText(ERROR.REQUIRE.NUMBER),
    ).resolves.toBeInTheDocument();
  },
};

export const InvalidYearTooShort: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText("MM");
    const yearInput = canvas.getByPlaceholderText("YY");

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, "12");

    await userEvent.clear(yearInput);
    await userEvent.type(yearInput, "2");

    await expect(
      canvas.findByText(
        `${CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
      ),
    ).resolves.toBeInTheDocument();
  },
};

export const InvalidYearBelowCurrentYear: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText("MM");
    const yearInput = canvas.getByPlaceholderText("YY");

    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, "12");

    await userEvent.clear(yearInput);
    await userEvent.type(yearInput, "24");

    await expect(
      canvas.findByText(ERROR.EXPIRY.BELOW_CURRENT_YEAR),
    ).resolves.toBeInTheDocument();
  },
};
