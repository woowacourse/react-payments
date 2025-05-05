import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import CardRegisterComplete from "../pages/CardRegisterComplete/CardRegisterComplete";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof CardRegisterComplete> = {
  title: "Pages/CardRegisterComplete",
  component: CardRegisterComplete,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
CardRegisterComplete는 카드 등록 완료 시 표시되는 완료 페이지입니다.\n
- 카드 번호와 카드사 정보를 기반으로 성공 메시지를 표시합니다.\n
- CardContext의 상태를 참조하여 어떤 카드가 등록되었는지 보여줍니다.\n
- "확인" 버튼을 통해 메인 페이지로 이동할 수 있습니다.
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardRegisterComplete>;

const Template = () => {
  return (
    <MemoryRouter>
      <CardRegisterComplete />
    </MemoryRouter>
  );
};

export const CompletedRegisterMessage: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText(/등록되었어요\./)).toBeInTheDocument();
  },
};
