export class CardNetwork {
  private allNetworkBrands = [Visa, MasterCard, UnionPay];
  #name: string | undefined;

  constructor(cardNumber: string) {
    this.#name = undefined;
    for (const networkBrand of this.allNetworkBrands) {
      this.#name = networkBrand.check(cardNumber);
      if (this.#name !== undefined) {
        break;
      }
    }
  }

  get name() {
    return this.#name;
  }
}

const Visa = {
  title: "visa",
  check(value: string): string | undefined {
    if (value.startsWith("4")) return this.title;
  },
};

const MasterCard = {
  title: "master",
  check(value: string): string | undefined {
    if (value.startsWith("5") && ["1", "2", "3", "4", "5"].includes(value[1]))
      return this.title;
  },
};

const UnionPay = {
  title: "union",
  check(value: string): string | undefined {
    if (value.startsWith("62")) {
      if (["624", "625", "626"].includes(value.slice(0, 3))) {
        return this.title;
      }
      if (
        6282 <= Number(value.slice(0, 4)) &&
        Number(value.slice(0, 4)) <= 6288
      ) {
        return this.title;
      }
      if (
        622126 <= Number(value.slice(0, 6)) &&
        Number(value.slice(0, 6)) <= 622925
      ) {
        return this.title;
      }
    }
  },
};
