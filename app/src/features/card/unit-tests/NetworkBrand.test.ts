import { CardNetwork } from "../CardNetwork";

describe("NetworkBrand Test", () => {
  test.each([
    ["4321", "visa"],
    ["5123", "master"],
    ["6241", "union"],
    ["1", undefined],
  ])(
    "전달된 카드번호를 통해 네트워크를 지정한다.",
    (cardNumber, expectedNetworkBrand) => {
      const brand = new CardNetwork(cardNumber);
      expect(brand.name).toBe(expectedNetworkBrand);
    },
  );
});
