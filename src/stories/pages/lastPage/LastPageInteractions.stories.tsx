import { userEvent, waitFor, within } from "@storybook/testing-library";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { CardNicknameSetting } from "./LastPage.stories";
import LastPage from "pages/LastPage";
import CardInfoProvider from "components/provider/CardInfoProvider";

const meta = {
  title: "Pages/LastPage",
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
    cardCompany: "우리카드",
    number1: "1232",
    number2: "1312",
    number3: "3123",
    number4: "2131",
    name: "YUMMY",
    month: "12",
    year: "31",
  },
} satisfies Meta<typeof LastPage>;

export default meta;

type Story = StoryObj<typeof meta>;

const TYPING_SPEED = {
  delay: 200,
};

export const SuccessInteraction: Story = {
  render: () => CardNicknameSetting(meta.args),

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const cardNicknameInput =
      canvas.getByPlaceholderText("카드 별칭을 입력해 주세요.");

    await waitFor(() => cardNicknameInput);

    await step("Typing Card Nickname", async () => {
      await userEvent.type(cardNicknameInput, "🥰야미 카드🥰", TYPING_SPEED);
    });

    await step("Button Click", () => {
      userEvent.click(canvas.getByRole("button"));
    });
  },
};

export const ErrorInteraction: Story = {
  render: () => CardNicknameSetting(meta.args),

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const cardNicknameInput =
      canvas.getByPlaceholderText("카드 별칭을 입력해 주세요.");

    await waitFor(() => cardNicknameInput);

    await step("Not Typing Card Nickname", async () => {
      await userEvent.type(cardNicknameInput, "          ", TYPING_SPEED);
    });

    await step("Button Click", () => {
      userEvent.click(canvas.getByRole("button"));
    });
  },
};
