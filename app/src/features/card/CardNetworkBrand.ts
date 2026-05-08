export const Visa = {
  title: "visa",
  check(value: string): string | undefined {
    if (value.startsWith("4")) return this.title;
  },
};

export const MasterCard = {
  title: "master",
  check(value: string): string | undefined {
    if (value.startsWith("5") && ["1", "2", "3", "4", "5"].includes(value[1]))
      return this.title;
  },
};

export const UnionPay = {
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

export const Amex = {
  title: "amex",
  check(value: string): string | undefined {
    const validValueLength = value.replaceAll(" ", "").length;
    if (
      (value.startsWith("34") || value.startsWith("37")) &&
      validValueLength >= 2 &&
      validValueLength <= 15
    ) {
      return this.title;
    }
  },
};

export const Diners = {
  title: "diners",
  check(value: string): string | undefined {
    const validValueLength = value.replaceAll(" ", "").length;
    if (value.startsWith("36") && validValueLength <= 14) return this.title;
  },
};
