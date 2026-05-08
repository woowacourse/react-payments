import { CardNetwork } from "../CardNetwork";

describe("NetworkBrand Test", () => {
  test("숫자가 4로 시작하면 Visa 브랜드 이다.", () => {
    const brand = new CardNetwork("4321");
    expect(brand.name).toBe("visa");
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
      const brand = new CardNetwork(value);
      expect(brand.name).toBe(expectedValue);
    },
  );

  describe("Union Pay", () => {
    test.each([
      ["623009", undefined],
      ["6241", "union"],
      ["62555555", "union"],
      ["6267990", "union"],
      ["627777", undefined],
    ])(
      "숫자가 624, 625, 626으로 시작하면 Union Pay 브랜드 이다.",
      (value, expectedValue) => {
        const brand = new CardNetwork(value);
        expect(brand.name).toBe(expectedValue);
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
        const brand = new CardNetwork(value);
        expect(brand.name).toBe(expectedValue);
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
        const brand = new CardNetwork(value);
        expect(brand.name).toBe(expectedValue);
      },
    );
  });
});
