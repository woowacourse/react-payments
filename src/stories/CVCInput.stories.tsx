import type { Meta, StoryObj } from "@storybook/react";
import CVCInput from "../components/CVCInput/CVCInput";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import ERROR from "../constants/errorMessage";
import { CARD_VALIDATION_INFO } from "../constants/cardValidationInfo";

const meta: Meta<typeof CVCInput> = {
  title: "Components/CVCInput",
  component: CVCInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          `💳 CVCInput은 ${CARD_VALIDATION_INFO.CVC_MAX_LENGTH}자리 숫자만 입력 가능한 카드 보안코드 필드입니다. 숫자가 아닌 값 입력, 자릿수 부족 등의 예외 처리를 포함하고 있습니다.`,
      },
    },
  },
  argTypes: {
    CVC: {
      description: `현재 입력된 CVC 값 (최대 ${CARD_VALIDATION_INFO.CVC_MAX_LENGTH}자리 숫자)`,
      control: false,
    },
    setCVC: {
      description: "CVC 값을 업데이트하는 setter 함수",
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template = () => {
  return <CVCInput />;
};

export const Valid_CVCInput: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const CVCInput = canvas.getByPlaceholderText("123");

    await userEvent.clear(CVCInput);
    await userEvent.type(CVCInput, "123");

    await expect(
      canvas.queryByText(ERROR.REQUIRE.NUMBER),
    ).not.toBeInTheDocument();

    await expect(
      canvas.queryByText(
        `${CARD_VALIDATION_INFO.CVC_MAX_LENGTH}${ERROR.REQUIRE}`,
      ),
    ).not.toBeInTheDocument();
  },
};

export const Invalid_NonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const CVCInput = canvas.getByPlaceholderText("123");

    await userEvent.clear(CVCInput);
    await userEvent.type(CVCInput, "ab");

    await expect(
      canvas.findByText(ERROR.REQUIRE.NUMBER),
    ).resolves.toBeInTheDocument();
  },
};

export const Invalid_NumberLength: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const CVCInput = canvas.getByPlaceholderText("123");

    await userEvent.clear(CVCInput);
    await userEvent.type(CVCInput, "12");

    await expect(
      canvas.findByText(
        `${CARD_VALIDATION_INFO.CVC_MAX_LENGTH}${ERROR.REQUIRE.SPECIFIC_LENGTH}`,
      ),
    ).resolves.toBeInTheDocument();
  },
};
