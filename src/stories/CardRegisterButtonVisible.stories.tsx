import { MemoryRouter } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react";
import RegisterCardButton from "../components/RegisterCardButton/RegisterCardButton";
import CardRegisterForm from "../pages/CardRegisterForm/CardRegisterForm";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { INPUT_CONTAINER } from "../constants/title";

const meta: Meta<typeof RegisterCardButton> = {
  title: "Components/RegisterCardButton",
  component: RegisterCardButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
RegisterCardButton은 카드 등록 폼이 유효할 때만 화면에 나타나는 버튼입니다.\n
- 폼이 완성되면 "확인" 버튼이 활성화되고, 누르면 등록이 완료됩니다.\n
- CardContext의 isValidForm 상태를 기반으로 표시 여부를 결정합니다.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RegisterCardButton>;

export const Default: Story = {
  render: () => (
    <MemoryRouter>
      <CardRegisterForm />
    </MemoryRouter>
  ),
};

export const VisibleWhenFormValid: Story = {
  render: () => (
    <MemoryRouter>
      <CardRegisterForm />
    </MemoryRouter>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 카드 번호 입력
    const cardInputs = canvas.getAllByPlaceholderText("1234");
    await userEvent.clear(cardInputs[0]);
    await userEvent.type(cardInputs[0], "4123");

    await userEvent.clear(cardInputs[1]);
    await userEvent.type(cardInputs[1], "5678");

    await userEvent.clear(cardInputs[2]);
    await userEvent.type(cardInputs[2], "3333");

    await userEvent.clear(cardInputs[3]);
    await userEvent.type(cardInputs[3], "8765");

    // 카드사 선택
    const cardSelectBox = canvas.getByText(INPUT_CONTAINER.CARD_COMPANY.PLACEHOLDER);
    await userEvent.click(cardSelectBox);
    const option = canvas.getByText("BC카드");
    await userEvent.click(option);

    // 만료일 입력
    const monthInput = canvas.getByPlaceholderText("MM");
    const yearInput = canvas.getByPlaceholderText("YY");
    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, "12");

    await userEvent.clear(yearInput);
    await userEvent.type(yearInput, "25");

    // CVC 입력
    const cvcInput = canvas.getByPlaceholderText("123");
    await userEvent.clear(cvcInput);
    await userEvent.type(cvcInput, "123");

    // 비밀번호 입력
    const passwordInput = canvas.getByPlaceholderText("12");
    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, "11");

    // 최종적으로 확인 버튼이 있는지 확인
    await expect(
      canvas.getByRole("button", { name: "확인" })
    ).toBeInTheDocument();
  },
};

export const InvisibleWhenFormInvalid: Story = {
  render: () => (
    <MemoryRouter>
      <CardRegisterForm />
    </MemoryRouter>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardInputs = canvas.getAllByPlaceholderText("1234");
    await userEvent.clear(cardInputs[0]);
    await userEvent.type(cardInputs[0], "4123");

    await userEvent.clear(cardInputs[1]);
    await userEvent.type(cardInputs[1], "5678");
    await userEvent.clear(cardInputs[2]);
    await userEvent.type(cardInputs[2], "3333");

    await userEvent.clear(cardInputs[3]);
    await userEvent.type(cardInputs[3], "8765");

    const cardSelectBox = canvas.getByText(INPUT_CONTAINER.CARD_COMPANY.PLACEHOLDER);
    await userEvent.click(cardSelectBox);
    const option = canvas.getByText("BC카드");
    await userEvent.click(option);

    const monthInput = canvas.getByPlaceholderText("MM");
    const yearInput = canvas.getByPlaceholderText("YY");
    await userEvent.clear(monthInput);
    await userEvent.type(monthInput, "12");

    await userEvent.clear(yearInput);
    await userEvent.type(yearInput, "25");

    const cvcInput = canvas.getByPlaceholderText("123");
    await userEvent.clear(cvcInput);
    await userEvent.type(cvcInput, "123");

    // 유효하지 않은 비밀번호 입력
    const passwordInput = canvas.getByPlaceholderText("12");
    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, "1");

    // 최종: "확인" 버튼이 없어야 함
    await expect(
      canvas.queryByRole("button", { name: "확인" })
    ).not.toBeInTheDocument();
  },
};
