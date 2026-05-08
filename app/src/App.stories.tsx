import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within, expect } from "storybook/test";

import App from "./App";

const meta = {
  title: "App",
  component: App,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const VisaBrandDetection: Story = {
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
