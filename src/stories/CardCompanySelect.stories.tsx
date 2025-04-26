import type { Meta, StoryObj } from "@storybook/react";
import CardCompanySelect from "../components/CardCompanySelect/CardCompanySelect";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof CardCompanySelect> = {
  title: "Components/CardCompanySelect",
  component: CardCompanySelect,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "CardCompanySelect은 카드 등록 과정에서 사용자가 카드사를 선택할 수 있도록 돕는 커스텀 드롭다운 컴포넌트입니다.\n" +
          " - 카드사 목록을 제공하고, 선택한 카드사에 따라 카드 프리뷰 색상이 변경됩니다.\n" +
          " - 선택한 카드사에 해당하는 색상을 전역 상태(cardColor)에 저장합니다.\n" +
          " - 기본 상태에서는 '카드사를 선택해주세요' 플레이스홀더를 표시합니다.\n" +
          " - 클릭하여 드롭다운을 열고, 카드사를 선택하면 드롭다운이 닫힙니다.\n",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template = () => {
  return <CardCompanySelect />;
};

export const Valid_CardCompanySelect: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardSelectBox = canvas.getByText("카드사를 선택해주세요");
    await userEvent.click(cardSelectBox);

    const option = canvas.getByText("BC카드");
    await userEvent.click(option);

    await expect(canvas.getByText("BC카드")).toBeInTheDocument();
  },
};
