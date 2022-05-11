import CardAdd from ".";
import { BrowserRouter } from "react-router-dom";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "CardAdd",
  component: CardAdd,
  argTypes: {
    setDone: { action: true },
  },
};

export const Template = (args) => (
  <BrowserRouter>
    <CardAdd {...args} />
  </BrowserRouter>
);

export const SubmitTest = Template.bind({});

SubmitTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const card = canvas.getByTestId("card");
  await userEvent.click(card);
  await userEvent.click(canvas.getAllByRole("pick")[0]);

  const CARD_NUMBER_VALUE = ["1111", "2222", "3333", "4444"];
  const CARD_EXPIRED_DATE = ["12", "23"];
  const CARD_OWNER_NAME = "OWNER";
  const CVC = "123";
  const CARD_PASSWORD = ["1", "2"];

  CARD_NUMBER_VALUE.forEach(async (value, idx) => {
    const cardNumberInput = canvas.getByTestId(`card-number-input${idx}`);
    await userEvent.click(cardNumberInput);
    await userEvent.type(cardNumberInput, value);
  });

  CARD_EXPIRED_DATE.forEach(async (value, idx) => {
    const expiredDateInput = canvas.getByTestId(`expired-date${idx}`);
    await userEvent.click(expiredDateInput);
    await userEvent.type(expiredDateInput, value);
  });
  const ownerNameInput = canvas.getByTestId("owner-name");
  await userEvent.click(ownerNameInput);
  await userEvent.type(ownerNameInput, CARD_OWNER_NAME);

  const secureCodeInput = canvas.getByTestId("secure-code");
  await userEvent.click(secureCodeInput);
  await userEvent.type(secureCodeInput, CVC);

  await CARD_PASSWORD.forEach(async (value, idx) => {
    const passwordInput = canvas.getByTestId(`password${idx}`);
    await userEvent.click(passwordInput);
    await userEvent.type(passwordInput, value);
  });

  const submitButton = canvas.getByTestId("submit-card");

  await userEvent.click(submitButton, 500);
  const cardNameValue = canvas.getByTestId("card-name-confirm");
  await expect(cardNameValue.textContent).toBe("록1바");

  const cardNumberValue = canvas.getByTestId("card-number-confirm");
  await expect(cardNumberValue.textContent).toBe(
    `${CARD_NUMBER_VALUE[0]}-${CARD_NUMBER_VALUE[1]}-····-····`
  );

  const cardOwnerValue = canvas.getByTestId("card-owner-confirm");
  await expect(cardOwnerValue.textContent).toBe(CARD_OWNER_NAME);
};
