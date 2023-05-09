import { StoryFn, Meta } from "@storybook/react";
import { CardInputForm } from "../components";
import { CardInputFormType } from "../components/CardInputForm";
import { useCard } from "../hooks";
import { within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "@storybook/jest";

export default {
  title: "CardInputForm",
  component: CardInputForm,
} as Meta<CardInputFormType>;

const Template: StoryFn<CardInputFormType> = (props) => {
  const [card, isValidCard, setNewCard] = useCard();

  return (
    <CardInputForm
      card={card}
      isValidCard={isValidCard}
      setNewCard={setNewCard}
      onSubmit={() => {}}
    />
  );
};

export const CardForm = Template.bind({});

CardForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const cardNumber = canvas.getByLabelText("카드 번호 *");
  const expiredDate = canvas.getByLabelText("만료일 *");
  const ownerName = canvas.getByLabelText("카드 소유자 이름 (선택)");
  const cvc = canvas.getByLabelText("보안 코드(CVC/CVV) *");
  const password = canvas.getByLabelText("카드 비밀번호 *");

  await userEvent.type(cardNumber, "abcdefgh", { delay: 200 });
  const numberErrorMessage = await canvas.findByText("숫자만 입력해 주세요.");
  expect(numberErrorMessage).toBeInTheDocument();
  await userEvent.clear(cardNumber);

  await userEvent.type(cardNumber, "12345678", { delay: 200 });
  const lengthErrorMessage = await canvas.findByText(
    "카드번호 16자리를 모두 입력해 주세요."
  );
  expect(lengthErrorMessage).toBeInTheDocument();
  await userEvent.type(cardNumber, "12345678", { delay: 150 });
  expect(expiredDate).toHaveFocus();

  await userEvent.type(expiredDate, "gggg", { delay: 500 });
  expect(numberErrorMessage).toBeInTheDocument();
  await userEvent.clear(expiredDate);

  await userEvent.type(expiredDate, "13", { delay: 500 });
  const monthErrorMessage = await canvas.findByText(
    "유효한 달(월)을 입력해 주세요."
  );
  expect(monthErrorMessage).toBeInTheDocument();
  await userEvent.clear(expiredDate);

  await userEvent.type(expiredDate, "1230", { delay: 500 });
  const yearErrorMessage = await canvas.findByText(
    "유효한 년(해)을 입력해 주세요."
  );
  expect(yearErrorMessage).toBeInTheDocument();
  await userEvent.clear(expiredDate);

  await userEvent.type(expiredDate, "1222", { delay: 500 });
  const expiredErrorMessage = await canvas.findByText(
    "만료일이 지난 카드입니다."
  );
  expect(expiredErrorMessage).toBeInTheDocument();
  await userEvent.clear(expiredDate);
  await userEvent.type(expiredDate, "0425", { delay: 500 });
  expect(ownerName).toHaveFocus();

  await userEvent.type(ownerName, "yeongmin", { delay: 150 });
  await userEvent.type(cvc, "12", { delay: 500 });
  const cvcLengthErrorMessage = await canvas.findByText(
    "cvc는 카드 뒤 3자리를 입력해 주세요."
  );
  expect(cvcLengthErrorMessage).toBeInTheDocument();
  await userEvent.type(cvc, "3", { delay: 500 });
  expect(password).toHaveFocus();

  await userEvent.type(password, "11", { delay: 500 });

  const submitButton = canvas.getByText("다음");
  expect(submitButton).toBeVisible();
};
