import { delay, http, HttpResponse } from "msw";
import { CARD_BRAND } from "../domain/card/cardBrand";
import { ISSUER, type IssuerCode } from "../domain/card/cardIssuer";
import type {
  CardListResponseItem,
  CardRegisterRequestBody,
} from "../domain/card/api/cards.types";

export const BASE_URL = "https://woowa.yiheon.com";

const cards: CardListResponseItem[] = [];

export const resetMockCards = () => {
  cards.splice(0, cards.length);
};

export const seedMockCards = (...mockCards: CardListResponseItem[]) => {
  resetMockCards();
  cards.push(...mockCards);
};

const getCardListHandler = http.get(`${BASE_URL}/cards`, async () => {
  const maskedCards = cards.map((card) => {
    return {
      ...card,
      number: card.number.slice(0, 6) + "******" + card.number.slice(12),
    };
  });

  await delay(1200);
  return HttpResponse.json(maskedCards);
});

const postCardHandler = http.post(`${BASE_URL}/cards`, async ({ request }) => {
  const body = (await request.json()) as CardRegisterRequestBody;
  const id = crypto.randomUUID().toString();

  await delay(1200);

  if (!isIssuerCode(body.issuerCode)) {
    return HttpResponse.json(
      {
        code: "INVALID_ISSUER_CODE",
        message: "유효하지 않은 카드사입니다.",
      },
      { status: 400 },
    );
  }

  if (!validateCardBrand(body.number)) {
    return HttpResponse.json(
      {
        code: "INVALID_CARD_NUMBER",
        message: "유효하지 않은 카드 번호입니다.",
      },
      { status: 400 },
    );
  }

  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(body.expirationDate)) {
    return HttpResponse.json(
      {
        code: "INVALID_EXPIRATION_DATE",
        message: "유효하지 않은 만료일입니다.",
      },
      { status: 400 },
    );
  }

  if (body.cvc === "000") {
    return HttpResponse.json(
      {
        code: "INVALID_CVC",
        message: "유효하지 않은 CVC입니다.",
      },
      { status: 400 },
    );
  }

  const card: CardListResponseItem = {
    id,
    issuerCode: body.issuerCode,
    number: body.number,
    expirationDate: body.expirationDate,
  };

  cards.push(card);

  return HttpResponse.json({ id: id }, { status: 201 });
});

const deleteCardHandler = http.delete(
  `${BASE_URL}/cards/:id`,
  async ({ params }) => {
    const { id } = params;

    const targetIndex = cards.findIndex((card) => card.id === id);
    if (targetIndex > -1) {
      cards.splice(targetIndex, 1);
    }

    await delay(1200);

    return HttpResponse.json(null, { status: 204 });
  },
);

export const handlers = [
  getCardListHandler,
  postCardHandler,
  deleteCardHandler,
];

const isIssuerCode = (issuerCode: string): issuerCode is IssuerCode => {
  return issuerCode in ISSUER;
};

const validateCardBrand = (cardNumbers: string) => {
  const masterCardPrefix = Number(
    cardNumbers.slice(0, CARD_BRAND.MASTERCARD.PREFIX.LENGTH),
  );
  const unionPayFirstPrefix = Number(
    cardNumbers.slice(0, CARD_BRAND.UNION_PAY.FIRST_PREFIX.LENGTH),
  );
  const unionPaySecondPrefix = Number(
    cardNumbers.slice(0, CARD_BRAND.UNION_PAY.SECOND_PREFIX.LENGTH),
  );
  const unionPayThirdPrefix = Number(
    cardNumbers.slice(0, CARD_BRAND.UNION_PAY.THIRD_PREFIX.LENGTH),
  );

  if (
    cardNumbers.startsWith(CARD_BRAND.VISA.PREFIX) &&
    cardNumbers.length === CARD_BRAND.VISA.LENGTH
  ) {
    return true;
  }

  if (
    masterCardPrefix >= CARD_BRAND.MASTERCARD.PREFIX.MIN &&
    masterCardPrefix <= CARD_BRAND.MASTERCARD.PREFIX.MAX &&
    cardNumbers.length === CARD_BRAND.MASTERCARD.LENGTH
  ) {
    return true;
  }

  if (
    cardNumbers.startsWith(CARD_BRAND.DINER.PREFIX) &&
    cardNumbers.length === CARD_BRAND.DINER.LENGTH
  ) {
    return true;
  }

  if (
    CARD_BRAND.AMEX.PREFIX.some((prefix) => cardNumbers.startsWith(prefix)) &&
    cardNumbers.length === CARD_BRAND.AMEX.LENGTH
  ) {
    return true;
  }

  if (
    unionPayFirstPrefix >= CARD_BRAND.UNION_PAY.FIRST_PREFIX.MIN &&
    unionPayFirstPrefix <= CARD_BRAND.UNION_PAY.FIRST_PREFIX.MAX &&
    cardNumbers.length === CARD_BRAND.UNION_PAY.LENGTH
  ) {
    return true;
  }

  if (
    unionPaySecondPrefix >= CARD_BRAND.UNION_PAY.SECOND_PREFIX.MIN &&
    unionPaySecondPrefix <= CARD_BRAND.UNION_PAY.SECOND_PREFIX.MAX &&
    cardNumbers.length === CARD_BRAND.UNION_PAY.LENGTH
  ) {
    return true;
  }

  if (
    unionPayThirdPrefix >= CARD_BRAND.UNION_PAY.THIRD_PREFIX.MIN &&
    unionPayThirdPrefix <= CARD_BRAND.UNION_PAY.THIRD_PREFIX.MAX &&
    cardNumbers.length === CARD_BRAND.UNION_PAY.LENGTH
  ) {
    return true;
  }

  return false;
};
