import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within, expect } from "storybook/test";
import { MemoryRouter, Routes, Route } from "react-router";

import CardCreate from "./CardCreate";
import CardCreateComplete from "./CardCreateComplete";

const meta = {
  title: "Card/CardCreate",
  component: CardCreate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardCreate>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultDecorators = [
  (Story) => (
    <MemoryRouter initialEntries={["/card"]}>
      <Routes>
        <Route path="/card" element={<Story />} />
        <Route path="/card/done" element={<CardCreateComplete />} />
      </Routes>
    </MemoryRouter>
  ),
];

export const Base: Story = {
  decorators: defaultDecorators,
};

export const VisaBrandDetection: Story = {
  decorators: defaultDecorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstDigitsInput =
      canvasElement.querySelector<HTMLInputElement>("#first-digits")!;

    await userEvent.type(firstDigitsInput, "4111");

    const brandLogo = canvas.getByAltText("visa-network-brand-logo");
    await expect(brandLogo).toBeInTheDocument();
  },
};

export const MasterBrandDetection: Story = {
  decorators: defaultDecorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstDigitsInput =
      canvasElement.querySelector<HTMLInputElement>("#first-digits")!;

    await userEvent.type(firstDigitsInput, "5111");

    const brandLogo = canvas.getByAltText("master-network-brand-logo");
    await expect(brandLogo).toBeInTheDocument();
  },
};

export const UnionBrandDetection: Story = {
  decorators: defaultDecorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstDigitsInput =
      canvasElement.querySelector<HTMLInputElement>("#first-digits")!;
    const secondDigitsInput =
      canvasElement.querySelector<HTMLInputElement>("#second-digits")!;
    await userEvent.type(firstDigitsInput, "624");
    let brandLogo = canvas.getByAltText("union-network-brand-logo");
    await expect(brandLogo).toBeInTheDocument();

    await userEvent.clear(firstDigitsInput);
    await userEvent.type(firstDigitsInput, "6288");
    brandLogo = canvas.getByAltText("union-network-brand-logo");
    await expect(brandLogo).toBeInTheDocument();

    await userEvent.clear(firstDigitsInput);
    await userEvent.type(firstDigitsInput, "6223");
    await userEvent.type(secondDigitsInput, "99");
    brandLogo = canvas.getByAltText("union-network-brand-logo");
    await expect(brandLogo).toBeInTheDocument();
  },
};

export const AmexBrandDetection: Story = {
  decorators: defaultDecorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstDigitsInput =
      canvasElement.querySelector<HTMLInputElement>("#first-digits")!;
    await userEvent.type(firstDigitsInput, "34");
    let brandLogo = canvas.getByAltText("amex-network-brand-logo");
    await expect(brandLogo).toBeInTheDocument();
    const [firstInput, secondInput, thirdInput, fourthInput] = Array.from(
      canvasElement.querySelectorAll<HTMLInputElement>(
        "#card-number-input-container input",
      ),
    );
    await userEvent.type(firstInput, "12");
    await userEvent.type(secondInput, "3456");
    await userEvent.type(thirdInput, "3456");
    await userEvent.type(fourthInput, "3456");
    brandLogo = canvas.queryByAltText("amex-network-brand-logo");
    await expect(brandLogo).not.toBeInTheDocument();
  },
};

export const DinersBrandDetection: Story = {
  decorators: defaultDecorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstDigitsInput =
      canvasElement.querySelector<HTMLInputElement>("#first-digits");
    await userEvent.type(firstDigitsInput, "36");
    let brandLogo = canvas.getByAltText("diners-network-brand-logo");
    await expect(brandLogo).toBeInTheDocument();
    const [firstInput, secondInput, thirdInput, fourthInput] = Array.from(
      canvasElement.querySelectorAll<HTMLInputElement>(
        "#card-number-input-container input",
      ),
    );
    await userEvent.type(firstInput, "12");
    await userEvent.type(secondInput, "3612");
    await userEvent.type(thirdInput, "3612");
    await userEvent.type(fourthInput, "361");
    brandLogo = canvas.queryByAltText("amex-network-brand-logo");
    await expect(brandLogo).not.toBeInTheDocument();
  },
};

export const CardNumberIsDynamicDisplay: Story = {
  decorators: defaultDecorators,
  play: async ({ canvasElement }) => {
    const firstDigitsInput = canvasElement.querySelector("#first-digits");
    await userEvent.type(firstDigitsInput, "5");
    let previewNumbers = canvasElement.querySelectorAll<HTMLBaseElement>(
      "#preview-card-number span",
    );
    await expect(previewNumbers[0]).toHaveTextContent("5");
    await userEvent.type(firstDigitsInput, "4");
    previewNumbers = canvasElement.querySelectorAll<HTMLBaseElement>(
      "#preview-card-number span",
    );
    await expect(previewNumbers[0]).toHaveTextContent("54");
  },
};

export const CardNumberSpecificDisplaySecret: Story = {
  decorators: defaultDecorators,
  play: async ({ canvasElement }) => {
    const thirdDigitsInput = canvasElement.querySelector("#third-digits");
    await userEvent.type(thirdDigitsInput, "1234");
    let previewNumbers = canvasElement.querySelectorAll<HTMLBaseElement>(
      "#preview-card-number span",
    );
    await expect(previewNumbers[2]).toHaveTextContent("●●●●");

    const fourthDigitsInput = canvasElement.querySelector("#fourth-digits");
    await userEvent.type(fourthDigitsInput, "1");
    previewNumbers = canvasElement.querySelectorAll<HTMLBaseElement>(
      "#preview-card-number span",
    );
    await expect(previewNumbers[3]).toHaveTextContent("●");
  },
};

// export const CardExpiryDateIsDynamicDisplay: Story = {
//   play: async ({ canvasElement }) => {
//     const expiryDateMonth = canvasElement.querySelector("#expiry-month");
//     await userEvent.type(expiryDateMonth, "1");
//     let previewExpiryMonth = canvasElement.querySelector(
//       "#preview-card-expiry-date-month",
//     );
//     await expect(previewExpiryMonth).toHaveTextContent("1");
//     await userEvent.type(expiryDateMonth, "2");
//     previewExpiryMonth = canvasElement.querySelector(
//       "#preview-card-expiry-date-month",
//     );
//     await expect(previewExpiryMonth).toHaveTextContent("12");

//     const expiryDateYear = canvasElement.querySelector("#expiry-year");
//     await userEvent.type(expiryDateYear, "3");
//     let previewExpiryYear = canvasElement.querySelector(
//       "#preview-card-expiry-date-year",
//     );
//     await expect(previewExpiryYear).toHaveTextContent("3");
//     await userEvent.type(expiryDateYear, "1");
//     previewExpiryYear = canvasElement.querySelector(
//       "#preview-card-expiry-date-year",
//     );
//     await expect(previewExpiryYear).toHaveTextContent("31");
//   },
// };

// export const CardExpiryDateDivideLineIsDynamicDisplay: Story = {
//   play: async ({ canvasElement }) => {
//     const expiryDateMonth = canvasElement.querySelector("#expiry-month");
//     await userEvent.type(expiryDateMonth, "12");
//     const divideLine = canvasElement.querySelector(
//       "#preview-card-expiry-date-divide-line",
//     );
//     await expect(divideLine).toBeVisible();
//     await expect(divideLine).toHaveTextContent("/");
//   },
// };

export const CardBrendSelectFieldIsDynamicDisplay: Story = {
  decorators: defaultDecorators,
  play: async ({ canvasElement }) => {
    const [firstInput, secondInput, thirdInput, fourthInput] = Array.from(
      canvasElement.querySelectorAll<HTMLInputElement>(
        "#card-number-input-container input",
      ),
    );
    await userEvent.type(firstInput, "3612");
    await userEvent.type(secondInput, "3612");
    await userEvent.type(thirdInput, "3612");
    await userEvent.type(fourthInput, "36");

    const cardBrandSelect = canvasElement.querySelector("#card-brand-select");
    await expect(cardBrandSelect).toBeVisible();

    await userEvent.clear(fourthInput);
    await expect(cardBrandSelect).not.toBeVisible();
  },
};

export const CardExpiryDateFieldIsDynamicDisplay: Story = {
  decorators: defaultDecorators,
  play: async ({ canvasElement }) => {
    const [firstInput, secondInput, thirdInput, fourthInput] = Array.from(
      canvasElement.querySelectorAll<HTMLInputElement>(
        "#card-number-input-container input",
      ),
    );
    await userEvent.type(firstInput, "3612");
    await userEvent.type(secondInput, "3612");
    await userEvent.type(thirdInput, "3612");
    await userEvent.type(fourthInput, "36");

    const brandSelect =
      canvasElement.querySelector<HTMLSelectElement>("#card-brand-select");

    await userEvent.selectOptions(brandSelect, "bc");
    const expiryDateInput = canvasElement.querySelector("#expiry-month");
    await expect(expiryDateInput).toBeVisible();
  },
};

export const CardCVCFieldIsDynamicDisplay: Story = {
  decorators: defaultDecorators,
  play: async ({ canvasElement }) => {
    const [firstInput, secondInput, thirdInput, fourthInput] = Array.from(
      canvasElement.querySelectorAll<HTMLInputElement>(
        "#card-number-input-container input",
      ),
    );
    await userEvent.type(firstInput, "3612");
    await userEvent.type(secondInput, "3612");
    await userEvent.type(thirdInput, "3612");
    await userEvent.type(fourthInput, "36");

    const brandSelect =
      canvasElement.querySelector<HTMLSelectElement>("#card-brand-select");
    await userEvent.selectOptions(brandSelect, "bc");

    const expiryMonthInput =
      canvasElement.querySelector<HTMLInputElement>("#expiry-month");
    const expiryYearInput =
      canvasElement.querySelector<HTMLInputElement>("#expiry-year");
    await userEvent.type(expiryMonthInput, "12");
    await userEvent.type(expiryYearInput, "26");

    const cvcInput = canvasElement.querySelector("#card-cvc-input");
    await expect(cvcInput).toBeVisible();

    await userEvent.clear(expiryYearInput);
    await expect(cvcInput).not.toBeVisible();
  },
};

export const CardPasswordFieldIsDynamicDisplay: Story = {
  decorators: defaultDecorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput, secondInput, thirdInput, fourthInput] = Array.from(
      canvasElement.querySelectorAll<HTMLInputElement>(
        "#card-number-input-container input",
      ),
    );
    await userEvent.type(firstInput, "3612");
    await userEvent.type(secondInput, "3612");
    await userEvent.type(thirdInput, "3612");
    await userEvent.type(fourthInput, "36");

    const brandSelect =
      canvasElement.querySelector<HTMLSelectElement>("#card-brand-select");
    await userEvent.selectOptions(brandSelect, "bc");

    const expiryMonthInput =
      canvasElement.querySelector<HTMLInputElement>("#expiry-month");
    const expiryYearInput =
      canvasElement.querySelector<HTMLInputElement>("#expiry-year");
    await userEvent.type(expiryMonthInput, "12");
    await userEvent.type(expiryYearInput, "26");

    const cvcInput =
      canvasElement.querySelector<HTMLInputElement>("#card-cvc-input");
    await userEvent.type(cvcInput, "123");

    const passwordInput = canvas.getByPlaceholderText("비밀번호");
    await expect(passwordInput).toBeVisible();

    await userEvent.clear(cvcInput);
    await expect(passwordInput).not.toBeVisible();
  },
};

export const PreviousFieldsHideWhenCardNumberBecomesIncomplete: Story = {
  decorators: defaultDecorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput, secondInput, thirdInput, fourthInput] = Array.from(
      canvasElement.querySelectorAll<HTMLInputElement>(
        "#card-number-input-container input",
      ),
    );
    await userEvent.type(firstInput, "3612");
    await userEvent.type(secondInput, "3612");
    await userEvent.type(thirdInput, "3612");
    await userEvent.type(fourthInput, "36");

    const brandSelect =
      canvasElement.querySelector<HTMLSelectElement>("#card-brand-select");
    await userEvent.selectOptions(brandSelect, "bc");

    const expiryMonthInput =
      canvasElement.querySelector<HTMLInputElement>("#expiry-month");
    const expiryYearInput =
      canvasElement.querySelector<HTMLInputElement>("#expiry-year");
    await userEvent.type(expiryMonthInput, "12");
    await userEvent.type(expiryYearInput, "26");

    await userEvent.clear(firstInput);

    await expect(brandSelect).not.toBeVisible();
    await expect(expiryMonthInput).not.toBeVisible();
    await expect(expiryYearInput).not.toBeVisible();
    const cvcInput = canvasElement.querySelector("#card-cvc-input");
    await expect(cvcInput).not.toBeVisible();
    const passwordInput = canvas.getByPlaceholderText("비밀번호");
    await expect(passwordInput).not.toBeVisible();
  },
};

export const NavigateToCardCreateDonePage: Story = {
  decorators: defaultDecorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput, secondInput, thirdInput, fourthInput] = Array.from(
      canvasElement.querySelectorAll<HTMLInputElement>(
        "#card-number-input-container input",
      ),
    );
    await userEvent.type(firstInput, "3612");
    await userEvent.type(secondInput, "3612");
    await userEvent.type(thirdInput, "3612");
    await userEvent.type(fourthInput, "36");

    const brandSelect =
      canvasElement.querySelector<HTMLSelectElement>("#card-brand-select");
    await userEvent.selectOptions(brandSelect, "bc");

    const expiryMonthInput =
      canvasElement.querySelector<HTMLInputElement>("#expiry-month");
    const expiryYearInput =
      canvasElement.querySelector<HTMLInputElement>("#expiry-year");
    await userEvent.type(expiryMonthInput, "12");
    await userEvent.type(expiryYearInput, "26");

    const cvcInput =
      canvasElement.querySelector<HTMLInputElement>("#card-cvc-input");
    await userEvent.type(cvcInput, "123");

    const passwordInput = canvas.getByPlaceholderText("비밀번호");
    await userEvent.type(passwordInput, "12");

    const submitButton = canvas.getByRole("button", { name: "확인" });
    await userEvent.click(submitButton);

    await expect(
      canvas.getByText("3612로 시작하는 BC카드 가 등록되었어요."),
    ).toBeInTheDocument();
  },
};
