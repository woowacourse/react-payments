import { useCardContext } from "../contexts/CardContext";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import CardPreview from "../components/CardPreview/CardPreview";

const meta: Meta<typeof CardPreview> = {
  title: "Components/CardPreview",
  component: CardPreview,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "💳 `CardPreview`는 입력된 카드 정보를 시각적으로 미리 보여주는 컴포넌트입니다.\n\n" +
          "- 카드 번호는 총 4개의 블록으로 구성되며, **앞의 두 블록만 표시**되고 나머지는 `••••`로 마스킹됩니다.\n" +
          "- 카드사(VISA, MasterCard 등)는 **카드 번호 앞자리**를 기준으로 자동 인식하여 로고 또는 스타일을 변경할 수 있습니다.\n" +
          "- 유효 기간은 MM/YY 형식으로 하단에 표시됩니다.\n\n" +
          "이 컴포넌트는 시각적 미리보기이므로 사용자가 입력 중인 정보에 실시간 반응하여 업데이트됩니다.",
      },
    },
  },
  argTypes: {
    cardNumbers: {
      description:
        "카드 번호를 나타내는 4개의 문자열 배열. 앞 두 블록은 그대로, 뒤 두 블록은 마스킹되어 표시됩니다.",
      control: false,
    },
    month: {
      description: "카드의 유효 기간 중 월 (MM 형식)",
      control: false,
    },
    year: {
      description: "카드의 유효 기간 중 연도 (YY 형식)",
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const TemplateVisa = () => {
  const { setCardNumbers, setMonth, setYear } = useCardContext();

  useEffect(() => {
    setCardNumbers(["4234", "5678", "3333", "4444"]);
    setMonth("12");
    setYear("30");
  }, []);

  return <CardPreview />;
};

const TemplateMaster = () => {
  const { setCardNumbers, setMonth, setYear } = useCardContext();

  useEffect(() => {
    setCardNumbers(["5134", "5678", "3333", "4444"]);
    setMonth("12");
    setYear("30");
  }, []);

  return <CardPreview />;
};

export const PreviewUpdatesOnInputVisa: Story = {
  render: TemplateVisa,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = await canvas.findAllByTestId(/^card-number-/);

    expect(inputs[0]).toHaveTextContent("4234");
    expect(inputs[1]).toHaveTextContent("5678");
    expect(inputs[2]).toHaveTextContent("••••");
    expect(inputs[3]).toHaveTextContent("••••");

    expect(canvas.getByText("12/30")).toBeInTheDocument();
  },
};

export const PreviewUpdatesOnInputMaster: Story = {
  render: TemplateMaster,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = await canvas.findAllByTestId(/^card-number-/);

    expect(inputs[0]).toHaveTextContent("5134");
    expect(inputs[1]).toHaveTextContent("5678");
    expect(inputs[2]).toHaveTextContent("••••");
    expect(inputs[3]).toHaveTextContent("••••");

    expect(canvas.getByText("12/30")).toBeInTheDocument();
  },
};
