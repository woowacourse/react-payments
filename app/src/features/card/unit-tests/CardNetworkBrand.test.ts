import { Visa, MasterCard, UnionPay, Amex } from "../CardNetworkBrand";

describe("CardNetworkBrand Test", () => {
  test("숫자가 4로 시작하면 Visa 브랜드 이다.", () => {
    expect(Visa.check("4321")).toBe("visa");
    expect(Visa.check("1234")).toBe(undefined);
  });

  test.each([
    ["5123", "master"],
    ["5299", "master"],
    ["53", "master"],
    ["5411111111", "master"],
    ["555555", "master"],
    ["5784", undefined],
  ])(
    "51 ~ 55 사이 숫자로 시작하면 Master Card 브랜드 이다.",
    (value, expectedValue) => {
      expect(MasterCard.check(value)).toBe(expectedValue);
    },
  );

  describe("UnionPay", () => {
    test.each([
      ["623009", undefined],
      ["6241", "union"],
      ["62555555", "union"],
      ["6267990", "union"],
      ["627777", undefined],
    ])(
      "숫자가 624, 625, 626으로 시작하면 Union Pay 브랜드 이다.",
      (value, expectedValue) => {
        expect(UnionPay.check(value)).toBe(expectedValue);
      },
    );

    test.each([
      ["62817777", undefined],
      ["6282994", "union"],
      ["6283775", "union"],
      ["6284", "union"],
      ["6288000", "union"],
      ["6289114", undefined],
    ])(
      "6282 ~ 6288 이내 숫자로 시작하면 Union Pay 브랜드 이다.",
      (value, expectedValue) => {
        expect(UnionPay.check(value)).toBe(expectedValue);
      },
    );

    test.each([
      ["622125774", undefined],
      ["62212677722", "union"],
      ["6221270004", "union"],
      ["622924888", "union"],
      ["622925", "union"],
      ["622926", undefined],
    ])(
      "622126 ~ 622925 이내 숫자로 시작하면 Union Pay 브랜드 이다.",
      (value, expectedValue) => {
        expect(UnionPay.check(value)).toBe(expectedValue);
      },
    );
  });

  describe("Amex", () => {
    test.each([
      ["34", "amex"],
      ["3712", "amex"],
      ["3", undefined],
      ["341234123412341", "amex"],
      ["3412341234123412", undefined],
    ])(
      "34, 37로 시작하고 15자 이내이면 Amex 브랜드 이다.",
      (value, expectedValue) => {
        expect(Amex.check(value)).toBe(expectedValue);
      },
    );
  });
});
