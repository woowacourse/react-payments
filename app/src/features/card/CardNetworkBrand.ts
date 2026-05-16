export interface CardNetworkBrand {
  title: string;
  length: number;
  check: (value: string) => string | undefined;
}

export const Visa = {
  title: "visa",
  length: 16,
  check(value: string): string | undefined {
    if (value.startsWith("4")) return this.title;
  },
};

export const MasterCard = {
  title: "master",
  length: 16,
  check(value: string): string | undefined {
    if (value.startsWith("5") && ["1", "2", "3", "4", "5"].includes(value[1]))
      return this.title;
  },
};

export const UnionPay = {
  title: "union",
  length: 16,
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

export const Amex = {
  title: "amex",
  length: 15,
  check(value: string): string | undefined {
    if (
      (value.startsWith("34") || value.startsWith("37")) &&
      value.length >= 2 &&
      value.length <= 15
    ) {
      return this.title;
    }
  },
};

export const Diners = {
  title: "diners",
  length: 14,
  check(value: string): string | undefined {
    if (value.startsWith("36") && value.length <= 14) return this.title;
  },
};
