import { userEvent, waitFor, within } from "@storybook/testing-library";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import CardInfoProvider from "components/provider/CardInfoProvider";
import CardRegisterForm from "pages/RegisterPage/CardRegisterForm";
import ModalStateProvider from "woowahan-yummy-modal/dist/ModalStateProvider";

const meta = {
  title: "Pages/CardRegisterPage",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <CardInfoProvider>
          <ModalStateProvider initialState>
            <Story />
          </ModalStateProvider>
        </CardInfoProvider>
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof CardRegisterForm>;

export default meta;

type Story = StoryObj<typeof meta>;

const TYPING_SPEED = {
  delay: 200,
};

export const SuccessInteraction: Story = {
  render: () => <CardRegisterForm />,

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const bcCard = canvas.getByLabelText("BC카드");

    await waitFor(() => bcCard);

    await step("Choosing Card Company", async () => {
      userEvent.click(bcCard);

      await waitFor(() => {
        const closeButton = canvas.getByRole("button", {
          name: "카드사를 선택했어요",
        });
        userEvent.click(closeButton);
      });
    });

    await step("Filling Out Form", async () => {
      const cardNumberInput = canvas.getByLabelText("카드 번호");
      await userEvent.type(
        cardNumberInput,
        "12345678978942120125YUMMY",
        TYPING_SPEED
      );

      userEvent.keyboard("{enter}");

      const securityCodeInput = canvas.getByLabelText("보안 코드(CVC/CVV)");
      await userEvent.type(securityCodeInput, "12377", TYPING_SPEED);

      userEvent.keyboard("{enter}");
    });
  },
};

export const ErrorInteraction: Story = {
  render: () => <CardRegisterForm />,

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Choosing Card Company", async () => {
      const closeButton = canvas.getByRole("button", {
        name: "나중에 선택할래요",
      });
      userEvent.click(closeButton);
    });

    await step("Filling Out Form", async () => {
      const cardNumberInput = canvas.getByLabelText("카드 번호");
      await userEvent.type(
        cardNumberInput,
        "12345678978942120123",
        TYPING_SPEED
      );

      userEvent.keyboard("{enter}");

      const securityCodeInput = canvas.getByLabelText("보안 코드(CVC/CVV)");
      await userEvent.type(securityCodeInput, "1237", TYPING_SPEED);

      userEvent.keyboard("{tab}");
    });
  },
};

export const FixedErrorInteraction: Story = {
  render: () => <CardRegisterForm />,

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Choosing Card Company", async () => {
      const closeButton = canvas.getByRole("button", {
        name: "나중에 선택할래요",
      });
      userEvent.click(closeButton);
    });

    await step("Filling Out Form", async () => {
      const cardNumberInput = canvas.getByLabelText("카드 번호");
      await userEvent.type(
        cardNumberInput,
        "12345678978942120123",
        TYPING_SPEED
      );

      userEvent.keyboard("{enter}");

      const securityCodeInput = canvas.getByLabelText("보안 코드(CVC/CVV)");
      await userEvent.type(securityCodeInput, "12", TYPING_SPEED);

      userEvent.keyboard("{tab}");

      const passwordInputs = canvas.getAllByPlaceholderText("0");
      const lastPasswordInput = passwordInputs[passwordInputs.length - 1];
      await userEvent.type(lastPasswordInput, "1", TYPING_SPEED);

      await new Promise((resolve) => setTimeout(resolve, 2000));
    });

    await step("Filling Out Form Completely", async () => {
      const expirationYearInput = canvas.getByPlaceholderText("YY");

      await waitFor(() => userEvent.click(expirationYearInput));

      await userEvent.type(expirationYearInput, "28", TYPING_SPEED);

      window.scrollTo({ top: 0, behavior: "smooth" });

      await waitFor(() => {
        const previewCard = canvas.getByText("카드사 선택");
        userEvent.click(previewCard);
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const bcCard = canvas.getByLabelText("BC카드");
      userEvent.click(bcCard);

      await waitFor(() => {
        const closeButton = canvas.getByRole("button", {
          name: "카드사를 선택했어요",
        });
        userEvent.click(closeButton);
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const securityCodeInput = canvas.getByLabelText("보안 코드(CVC/CVV)");
      await userEvent.type(securityCodeInput, "123", TYPING_SPEED);
    });
  },
};
