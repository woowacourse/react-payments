import { expect, test } from "@playwright/test";

const CARD_FORM_URL = "/react-payments/cards/new";
const CARD_LIST_URL = "/react-payments/cards";

const fillCardForm = async (page: import("@playwright/test").Page, { cvc = "123" } = {}) => {
  // 카드 번호
  await page.getByLabel("카드 번호 첫번째 칸").fill("4111");
  await page.getByLabel("카드 번호 두번째 칸").fill("1111");
  await page.getByLabel("카드 번호 세번째 칸").fill("1111");
  await page.getByLabel("카드 번호 네번째 칸").fill("1111");

  // 카드사 선택 (react-select)
  await page.getByText("카드사를 선택해주세요").click();
  await page.getByText("국민카드").click();

  // 만료일
  await page.getByLabel("유효기간 월").fill("12");
  await page.getByLabel("유효기간 년도").fill("28");

  // CVC
  await page.getByLabel("CVC").fill(cvc);

  // 비밀번호
  await page.getByLabel("비밀번호 앞 2자리").fill("12");
};

test.describe("카드 등록", () => {
  test("카드 정보를 입력하면 목록 페이지에서 등록된 카드를 확인할 수 있다", async ({ page }) => {
    await page.goto(CARD_FORM_URL);

    await fillCardForm(page);

    await page.getByRole("button", { name: "확인" }).click();

    await expect(page).toHaveURL(CARD_LIST_URL);
    await expect(page.getByText(/411111\*+1111/)).toBeVisible();
    await expect(page.getByText("유효기간 12/28")).toBeVisible();
  });

  test("CVC 000 입력 시 서버 에러 메시지가 표시되고 페이지 이동이 없다", async ({ page }) => {
    await page.goto(CARD_FORM_URL);

    await fillCardForm(page, { cvc: "000" });

    await page.getByRole("button", { name: "확인" }).click();

    await expect(page.getByText("유효하지 않은 CVC입니다.")).toBeVisible();
    await expect(page).toHaveURL(CARD_FORM_URL);
  });
});
