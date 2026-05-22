/**
 * @jest-environment <rootDir>/jsdom-env.cjs
 */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import db from "../mocks/db";
import CardListPage from "../../../pages/card/List";

const TEST_CARD = {
  id: "delete-test-card-id",
  issuerCode: "31",
  number: "4111111111111111",
  expirationDate: "12/28",
  cvc: "777",
};

const REMAINING_CARD = {
  id: "remaining-test-card-id",
  issuerCode: "41",
  number: "4111111111111112",
  expirationDate: "11/27",
  cvc: "888",
};

function renderCardItem() {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <CardListPage />
    </MemoryRouter>,
  );
  return { user };
}

describe("CardItem 카드 제거 통합 테스트", () => {
  beforeEach(() => {
    db.card.create(TEST_CARD);
  });

  afterEach(() => {
    db.card.deleteMany({ where: { id: { equals: TEST_CARD.id } } });
    jest.restoreAllMocks();
  });

  test("제거 버튼 클릭 후 확인하면 카드가 삭제된다", async () => {
    jest.spyOn(window, "confirm").mockReturnValue(true);

    const { user } = renderCardItem();
    await user.click(await screen.findByRole("button"));

    await waitFor(() => {
      const card = db.card.findFirst({
        where: { id: { equals: TEST_CARD.id } },
      });
      expect(card).toBeNull();
    });
  });

  test("제거 버튼 클릭 후 취소하면 카드가 삭제되지 않는다", async () => {
    jest.spyOn(window, "confirm").mockReturnValue(false);

    const { user } = renderCardItem();
    await user.click(await screen.findByRole("button"));

    await waitFor(() => {
      const card = db.card.findFirst({
        where: { id: { equals: TEST_CARD.id } },
      });
      expect(card).not.toBeNull();
    });
  });

  test("제거 버튼 클릭 후 확인하면 삭제되지 않은 카드를 가져온다", async () => {
    db.card.create(REMAINING_CARD);
    jest.spyOn(window, "confirm").mockReturnValue(true);

    const { user } = renderCardItem();
    const [deleteButton] = await screen.findAllByRole("button");
    await user.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("BC카드")).not.toBeInTheDocument();
      expect(screen.getByText("신한카드")).toBeInTheDocument();
    });

    db.card.deleteMany({ where: { id: { equals: REMAINING_CARD.id } } });
  });
});
