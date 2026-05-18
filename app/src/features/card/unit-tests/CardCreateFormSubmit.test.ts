import db from "../mocks/db";

const API_URL = "https://api.antolibank.com/cards";

const VALID_CARD = {
  number: "4321432143214321",
  expirationDate: "12/28",
  cvc: "777",
  issuerCode: "31",
};

const postCard = (body: object) =>
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(body),
  });

describe("카드 등록 버튼 클릭", () => {
  afterEach(() => {
    db.card
      .getAll()
      .forEach((card) =>
        db.card.delete({ where: { id: { equals: card.id } } }),
      );
  });

  test("201 응답과 성공 메시지를 반환한다", async () => {
    const response = await postCard(VALID_CARD);

    expect(response.status).toBe(201);
    expect(await response.json()).toEqual({ message: "카드 생성!" });
  });
});
