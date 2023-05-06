import { userEvent, waitFor, within } from "@storybook/testing-library";
import { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import LastPage from "pages/LastPage";
import CardInfoProvider from "components/provider/CardInfoProvider";
import useInitCardInfo from "hooks/useInitCardInfo";
import { PreviewCardInfo } from "types";
import { CARD_COMPANIES } from "constants/cardCompanies";

const date = {
  maxLength: 2,
};

const cardNumber = {
  control: {
    maxLength: 4,
  },
  description: "숫자 4자리를 입력해 프리뷰 카드 번호를 변경할 수 있습니다.",
};

const disabledControl = {
  disable: true,
};

const disabledCardNumber = {
  control: disabledControl,
  description: "카드 번호 마지막 8자리는 암호화 되어 표시됩니다.",
};

const meta = {
  component: LastPage,
  title: "Pages/LastPage",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <CardInfoProvider>
          <div id="root">
            <Story />
          </div>
        </CardInfoProvider>
      </BrowserRouter>
    ),
  ],

  args: {
    cardCompany: "국민카드",
    number1: "1232",
    number2: "1312",
    number3: "3123",
    number4: "2131",
    name: "NAME",
    month: "12",
    year: "31",
  },

  argTypes: {
    cardCompany: {
      options: Object.keys(CARD_COMPANIES).map((company) => company),
      control: {
        type: "radio",
      },
      description:
        "카드사를 선택해 프리뷰 카드사와 카드 색깔을 변경할 수 있습니다.",
    },
    month: {
      control: date,
      description:
        "유효한 월(ex. 01 ~ 12)을 입력해 프리뷰 카드의 만료일을 변경할 수 있습니다.",
    },
    year: {
      control: date,
      description:
        "유효한 연도(ex. 23 ~)을 입력해 프리뷰 카드의 만료일을 변경할 수 있습니다.",
    },
    name: {
      control: {
        maxLength: 20,
      },
      description:
        "20자 이내 영문을 입력해 프리뷰 카드 사용자 이름을 변경할 수 있습니다.",
    },
    number1: cardNumber,
    number2: cardNumber,
    number3: disabledCardNumber,
    number4: disabledCardNumber,
  },
} satisfies Meta<typeof LastPage>;

export default meta;

export const CardNicknameSetting = (args: PreviewCardInfo) => {
  const { initCardInfo } = useInitCardInfo();

  useEffect(() => {
    Object.entries(args).map(([arg, value]) =>
      initCardInfo(arg, String(value))
    );
  }, [args]);

  return <LastPage />;
};

/******************** Interactions ********************/

type Story = StoryObj<typeof meta>;

export const SuccessInteraction: Story = {
  render: () => {
    return CardNicknameSetting(meta.args);
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const cardNicknameInput =
      canvas.getByPlaceholderText("카드 별칭을 입력해 주세요.");

    await waitFor(() => cardNicknameInput);

    await step("Typing Card Nickname", async () => {
      await userEvent.type(cardNicknameInput, "🥰야미 카드🥰", { delay: 200 });
    });

    await step("Button Click", () => {
      userEvent.click(canvas.getByRole("button"));
    });
  },
};

export const ErrorInteraction: Story = {
  render: () => {
    return CardNicknameSetting(meta.args);
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const cardNicknameInput =
      canvas.getByPlaceholderText("카드 별칭을 입력해 주세요.");

    await waitFor(() => cardNicknameInput);

    await step("Not Typing Card Nickname", async () => {
      await userEvent.type(cardNicknameInput, "          ", { delay: 200 });
    });

    await step("Button Click", () => {
      userEvent.click(canvas.getByRole("button"));
    });
  },
};
